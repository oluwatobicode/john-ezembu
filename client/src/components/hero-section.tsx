import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Badge 
                  variant="outline" 
                  className="mb-4 text-primary border-primary/20 bg-primary/5"
                  data-testid="availability-badge"
                >
                  Available for opportunities
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
                  Hi, I'm <span className="gradient-text">John Ezembu</span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6" data-testid="hero-subtitle">
                  Data Scientist & AI Automation Engineer
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl" data-testid="hero-description">
                  I build AI-powered analytics and automation that turn complex data into measurable business outcomes. 
                  Specializing in machine learning, federated learning, and generative AI solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToProjects}
                  className="inline-flex items-center px-6 py-3 rainbow-button text-white font-semibold border-0"
                  data-testid="button-view-projects"
                >
                  View Projects
                  <ArrowDown className="ml-2 w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline"
                  asChild
                  className="inline-flex items-center px-6 py-3"
                  data-testid="button-download-cv"
                >
                  <a href="/john-ezembu-cv.pdf" target="_blank">
                    Download CV
                    <Download className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={scrollToContact}
                  className="inline-flex items-center px-6 py-3"
                  data-testid="button-contact"
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative float-animation">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-2 pulse-glow">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 p-1">
                    <img 
                      src="/john-ezembu-headshot.jpg" 
                      alt="John Ezembu - Data Scientist and AI Automation Engineer" 
                      className="w-full h-full rounded-full object-cover"
                      data-testid="hero-image"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                </motion.div>
                
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2" data-testid="location-badge">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Conley, USA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
