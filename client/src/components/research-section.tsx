import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export function ResearchSection() {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="research-title">
              <span className="gradient-text">Research & Publications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="research-subtitle">
              Contributing to the advancement of machine learning and federated learning through academic research.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card data-testid="research-paper-card" className="card-hover shimmer">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20" data-testid="paper-status-badge">
                        Under Review
                      </Badge>
                      <span className="text-sm text-muted-foreground" data-testid="paper-date">July 2025</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="paper-title">
                      Multi-Modal Data Fusion With Federated Multi-Head Attention for Diabetic Retinopathy Severity Classification
                    </h3>
                    
                    <p className="text-muted-foreground mb-4" data-testid="paper-authors">
                      <strong>Authors:</strong> Ezembu John, Rita Orji, Oladapo Oyebode
                    </p>
                    
                    <p className="text-muted-foreground mb-6" data-testid="paper-abstract">
                      This study develops a multi-modal architecture for diabetic retinopathy (DR) severity grading 
                      that integrates fundus images and electronic health record (EHR) features within a federated 
                      learning framework for privacy-preserving, distributed training. The approach combines ResNet-18 
                      CNN for image analysis with a multilayer perceptron for EHR inputs, using a multi-head attention 
                      mechanism to enhance image features based on EHR context.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div data-testid="paper-contributions">
                        <h4 className="font-semibold text-foreground mb-2">Key Contributions</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Multi-modal fusion using attention mechanisms</li>
                          <li>• Federated learning implementation with FedML</li>
                          <li>• Privacy-preserving distributed training</li>
                          <li>• Clinically relevant attention visualization</li>
                        </ul>
                      </div>
                      
                      <div data-testid="paper-tech-stack">
                        <h4 className="font-semibold text-foreground mb-2">Technical Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">PyTorch</Badge>
                          <Badge variant="secondary" className="text-xs">FedML</Badge>
                          <Badge variant="secondary" className="text-xs">ResNet-18</Badge>
                          <Badge variant="secondary" className="text-xs">Multi-Head Attention</Badge>
                          <Badge variant="secondary" className="text-xs">RetinaMNIST</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-sm font-medium text-foreground">Status: </span>
                        <span className="text-sm text-primary" data-testid="paper-journal-status">IEEE Journal Review</span>
                      </div>
                      <div className="flex space-x-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="shimmer hover:scale-105 transition-transform"
                          data-testid="button-view-abstract"
                        >
                          View Abstract
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          data-testid="button-contact-for-details"
                        >
                          Contact for Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
