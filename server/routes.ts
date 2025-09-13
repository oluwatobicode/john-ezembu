import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithAI } from "./lib/openai";
import { validateContactForm, processContactForm, checkRateLimit } from "./lib/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Chat endpoint
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ 
          error: "Message is required and must be a string" 
        });
      }

      if (message.length > 1000) {
        return res.status(400).json({ 
          error: "Message too long. Please keep it under 1000 characters." 
        });
      }

      const response = await chatWithAI({ message: message.trim() });
      res.json(response);
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ 
        error: error.message || "Failed to process chat request" 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      
      // Rate limiting
      if (!checkRateLimit(clientIP)) {
        return res.status(429).json({
          error: "Rate limit exceeded. Please wait before sending another message."
        });
      }

      // Validate form data
      const validatedData = validateContactForm(req.body);
      if (!validatedData) {
        return res.status(400).json({
          error: "Invalid form data. Please check all fields and try again."
        });
      }

      // Process the contact form
      const result = await processContactForm(validatedData);
      
      if (result.success) {
        res.json({ message: result.message });
      } else {
        res.status(500).json({ error: result.message });
      }
    } catch (error: any) {
      console.error("Contact API error:", error);
      res.status(500).json({ 
        error: "Failed to process contact form. Please try again later." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
