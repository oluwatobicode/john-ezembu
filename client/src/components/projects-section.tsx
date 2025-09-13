import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    project => activeFilter === "All" || project.category === activeFilter
  );

  const getMetricColor = (color?: string) => {
    switch (color) {
      case "green": return "text-green-600 dark:text-green-400";
      case "blue": return "text-blue-600 dark:text-blue-400";
      case "purple": return "text-purple-600 dark:text-purple-400";
      case "orange": return "text-orange-600 dark:text-orange-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="projects-title">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="projects-subtitle">
              A showcase of my data science and machine learning projects, from research to real-world applications.
            </p>
          </motion.div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="project-filters">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="text-sm font-medium"
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow card-hover shimmer" data-testid={`project-card-${project.id}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                    
                    {/* Project Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 opacity-50">
                          {project.category === "Research" && (
                            <svg className="w-16 h-16 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                          )}
                          {project.category === "Machine Learning" && (
                            <svg className="w-16 h-16 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                          )}
                          {(project.category === "Regression" || project.category === "Data Engineering") && (
                            <svg className="w-16 h-16 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                            </svg>
                          )}
                          {project.category === "Visualization" && (
                            <svg className="w-16 h-16 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                            </svg>
                          )}
                          {project.category === "Automation" && (
                            <svg className="w-16 h-16 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4" data-testid={`project-tags-${project.id}`}>
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm" data-testid={`project-metrics-${project.id}`}>
                        {project.metrics.map((metric, i) => (
                          <div key={i}>
                            <span className="font-medium text-foreground">{metric.label}:</span>{" "}
                            <span className={getMetricColor(metric.color)}>{metric.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            data-testid={`project-github-${project.id}`}
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            data-testid={`project-live-${project.id}`}
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              asChild
              className="inline-flex items-center px-6 py-3"
              data-testid="button-view-all-projects"
            >
              <a href="https://github.com/John-gram" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
