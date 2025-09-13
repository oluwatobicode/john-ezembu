import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground" data-testid="copyright">
                &copy; 2025 John Ezembu. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6" data-testid="footer-links">
              <a 
                href="mailto:johnezembu12@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-email"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/john-ezembu" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-linkedin"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/John-gram" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-github"
              >
                GitHub
              </a>
              <a 
                href="/john-ezembu-cv.pdf" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-cv"
              >
                CV
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground" data-testid="tech-stack">
              Built with React, TypeScript, and Tailwind CSS. Designed for performance, accessibility, and user experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
