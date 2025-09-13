import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { experiences, leadership } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="experience-title">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="experience-subtitle">
              My journey in data science and analytics, delivering measurable business impact through data-driven solutions.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card data-testid={`experience-card-${experience.id}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${experience.id}`}>
                          {experience.title}
                        </h3>
                        <p className="text-primary font-medium" data-testid={`experience-company-${experience.id}`}>
                          {experience.company}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`experience-location-${experience.id}`}>
                          {experience.location}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground lg:text-right">
                        <div data-testid={`experience-dates-${experience.id}`}>
                          {experience.startDate} - {experience.endDate || "Present"}
                        </div>
                        {experience.current && (
                          <Badge variant="outline" className="mt-1 border-green-500/20 text-green-600 bg-green-500/10">
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4" data-testid={`experience-description-${experience.id}`}>
                      {experience.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3" data-testid={`experience-achievement-${experience.id}-${i}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2" data-testid={`experience-technologies-${experience.id}`}>
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Leadership & Volunteering */}
          <div className="mt-16">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground" data-testid="leadership-title">
                Leadership & Volunteering
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card data-testid={`leadership-card-${item.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-foreground" data-testid={`leadership-title-${item.id}`}>
                          {item.title}
                        </h4>
                        <span className="text-sm text-muted-foreground" data-testid={`leadership-period-${item.id}`}>
                          {item.period}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`leadership-organization-${item.id}`}>
                        {item.organization}
                      </p>
                      
                      <p className="text-muted-foreground mb-4 text-sm" data-testid={`leadership-description-${item.id}`}>
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2" data-testid={`leadership-achievement-${item.id}-${i}`}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
