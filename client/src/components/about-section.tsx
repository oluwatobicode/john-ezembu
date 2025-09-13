import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const skills = [
    { name: "Python & ML Libraries", level: 5 },
    { name: "SQL & Data Integration", level: 4 },
    { name: "Generative AI & RAG", level: 4 },
    { name: "Federated Learning", level: 4 }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="about-title">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="about-subtitle">
              A results-driven Data Scientist with First-Class Honors in Computer Science, 
              passionate about leveraging AI to create meaningful impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="about-intro">
                  I'm a Data Scientist and Machine Learning Researcher with expertise in translating 
                  complex AI concepts into actionable business insights. With a strong foundation in 
                  Python, SQL, and machine learning, I specialize in generative AI, workflow optimization, 
                  and federated learning.
                </p>
                
                <p data-testid="about-research">
                  My research focuses on multi-modal data fusion and attention mechanisms, with a paper 
                  currently under review at IEEE. I'm passionate about leveraging IoT, sensor data fusion, 
                  and personalized interventions to design innovative systems that improve workplace health 
                  and productivity.
                </p>
              </div>
              
              <div className="mt-8" data-testid="education-section">
                <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Bachelor of Science in Computer Science</strong> - Bowen University (2024)
                  </div>
                  <div>First-Class Honors</div>
                  <div>Majors: Data Management, Software Engineering, Machine Learning, Project Management</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card data-testid="skills-card" className="card-hover shimmer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Core Skills</h3>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground" data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          {skill.name}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card data-testid="contact-info-card" className="card-hover shimmer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3" data-testid="contact-phone">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">+234 704 911 0011</span>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-email">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">johnezembu12@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-location">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Lagos, Nigeria</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
