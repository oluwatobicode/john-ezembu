import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";

// Import generated project images
import medicalAIImage from "@assets/generated_images/Medical_AI_retinal_analysis_c814a962.png";
import creditImage from "@assets/generated_images/Credit_assessment_dashboard_9450068b.png";
import realEstateImage from "@assets/generated_images/Real_estate_analytics_47e803f5.png";
import covidImage from "@assets/generated_images/COVID_data_exploration_17423a9b.png";
import tableauImage from "@assets/generated_images/Tableau_dashboard_showcase_c7db63f4.png";
import fileOrgImage from "@assets/generated_images/File_organization_automation_9d45b8ad.png";

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

  const getProjectImage = (projectId: string) => {
    switch (projectId) {
      case "multimodal-dr-classification": return medicalAIImage;
      case "creditworthiness-prediction": return creditImage;
      case "real-estate-prediction": return realEstateImage;
      case "covid-data-exploration": return covidImage;
      case "tableau-dashboards": return tableauImage;
      case "automated-file-organizer": return fileOrgImage;
      default: return null;
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
                    
                    {/* Project Image */}
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative group">
                      <img 
                        src={getProjectImage(project.id) || ""}
                        alt={`${project.title} visualization`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 shimmer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
