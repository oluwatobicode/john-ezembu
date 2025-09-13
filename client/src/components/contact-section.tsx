import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="contact-title">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
              Ready to collaborate on your next data science project or discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4" data-testid="contact-email-info">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:johnezembu12@gmail.com" 
                        className="text-primary hover:text-primary/80 transition-colors"
                        data-testid="link-email"
                      >
                        johnezembu12@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-phone-info">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+2347049110011" 
                        className="text-primary hover:text-primary/80 transition-colors"
                        data-testid="link-phone"
                      >
                        +234 704 911 0011
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-location-info">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div data-testid="social-links-section">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/john-ezembu" 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-linkedin"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://github.com/John-gram" 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-github"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="mailto:johnezembu12@gmail.com" 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid="link-email-icon"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card data-testid="contact-form-card" className="card-hover shimmer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="contact-form-title">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-2"
                        data-testid="input-subject"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 resize-none"
                        data-testid="input-message"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full shimmer hover:scale-105 transition-transform"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
