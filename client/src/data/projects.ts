export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    color?: string;
  }[];
  date: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "multimodal-dr-classification",
    title: "Multi-Modal Data Fusion for Diabetic Retinopathy",
    description: "Developed federated learning model combining fundus images with EHR data using multi-head attention mechanism. Paper currently in review at IEEE.",
    longDescription: "This study develops a multi-modal architecture for diabetic retinopathy (DR) severity grading that integrates fundus images and electronic health record (EHR) features within a federated learning framework for privacy-preserving, distributed training. The approach combines ResNet-18 CNN for image analysis with a multilayer perceptron for EHR inputs, using a multi-head attention mechanism to enhance image features based on EHR context.",
    category: "Research",
    tags: ["PyTorch", "FedML", "ResNet-18", "Attention", "Medical AI"],
    metrics: [
      { label: "Status", value: "IEEE Review", color: "blue" },
      { label: "Privacy", value: "Federated", color: "green" },
      { label: "Modalities", value: "Image + EHR", color: "purple" }
    ],
    date: "July 2025",
    status: "Under Review",
    imageUrl: "/projects/diabetic-retinopathy.jpg"
  },
  {
    id: "creditworthiness-prediction",
    title: "Creditworthiness Prediction Model",
    description: "Built classification model using ensemble methods with SMOTE for class imbalance. Achieved 87% F1-score with SHAP interpretability.",
    longDescription: "Developed a comprehensive machine learning pipeline for creditworthiness assessment using multiple ensemble methods including CatBoost, XGBoost, Logistic Regression, and Random Forest. Implemented SMOTE to handle class imbalance and integrated SHAP for model explainability. Created interactive Power BI dashboard for stakeholder insights.",
    category: "Machine Learning",
    tags: ["CatBoost", "XGBoost", "SHAP", "Power BI", "Classification"],
    metrics: [
      { label: "F1-Score", value: "87%", color: "green" },
      { label: "Model Type", value: "Ensemble", color: "blue" },
      { label: "Interpretability", value: "SHAP", color: "purple" }
    ],
    date: "January 2025",
    status: "Complete",
    githubUrl: "https://github.com/John-gram",
    imageUrl: "/projects/creditworthiness.jpg"
  },
  {
    id: "real-estate-prediction",
    title: "Real Estate Price Prediction",
    description: "Linear regression model with feature engineering to predict housing prices. Achieved R² of 0.89 with comprehensive visualization analysis.",
    longDescription: "Implemented a machine learning solution for real estate price prediction using linear regression with advanced feature engineering techniques. The model includes comprehensive data preprocessing, outlier detection, and feature selection. Created detailed visualizations to understand market trends and model performance.",
    category: "Regression",
    tags: ["Scikit-learn", "Matplotlib", "Seaborn", "Pandas", "Feature Engineering"],
    metrics: [
      { label: "R²", value: "0.89", color: "green" },
      { label: "Model", value: "Linear Regression", color: "blue" },
      { label: "Features", value: "Engineered", color: "orange" }
    ],
    date: "July 2024",
    status: "Complete",
    githubUrl: "https://github.com/John-gram",
    imageUrl: "/projects/real-estate.jpg"
  },
  {
    id: "covid-data-exploration",
    title: "COVID-19 Data Exploration",
    description: "Analyzed 336k rows of COVID-19 data using SQL with CTEs and views. Built ML model achieving 88% accuracy and 34% lift.",
    longDescription: "Comprehensive analysis of global COVID-19 data involving 336,000+ records. Used advanced SQL techniques including Common Table Expressions (CTEs) and views for data transformation. Developed machine learning models for trend prediction and created word cloud visualizations for insights extraction.",
    category: "Data Engineering",
    tags: ["SQL Server", "Python", "Tableau", "Machine Learning", "Data Visualization"],
    metrics: [
      { label: "Accuracy", value: "88%", color: "green" },
      { label: "Lift", value: "34%", color: "blue" },
      { label: "Records", value: "336k", color: "purple" }
    ],
    date: "September 2023",
    status: "Complete",
    githubUrl: "https://github.com/John-gram/DataAnalyticsProject/blob/main/SQLQuery2.sql",
    imageUrl: "/projects/covid-analysis.jpg"
  },
  {
    id: "tableau-dashboards",
    title: "Interactive Tableau Dashboards",
    description: "Created comprehensive dashboards for COVID-19 analysis, housing market insights, and financial forecasting with interactive visualizations.",
    longDescription: "Developed multiple interactive Tableau dashboards covering diverse domains including public health analytics, real estate market analysis, and financial forecasting. Each dashboard features dynamic filtering, drill-down capabilities, and responsive design for different stakeholder needs.",
    category: "Visualization",
    tags: ["Tableau", "Data Visualization", "Analytics", "Business Intelligence"],
    metrics: [
      { label: "Dashboards", value: "3+", color: "blue" },
      { label: "Interactivity", value: "Full", color: "green" },
      { label: "Domains", value: "Multi", color: "purple" }
    ],
    date: "2023-2024",
    status: "Complete",
    liveUrl: "https://public.tableau.com/app/profile/john.ezembu/viz/TorontoAirBnBInsightsProject/Dashboard1",
    imageUrl: "/projects/tableau-dashboards.jpg"
  },
  {
    id: "automated-file-organizer",
    title: "Automated File Organizer",
    description: "Python-based file organization system using shutil library to automatically sort files in directories by type and date.",
    longDescription: "Created an intelligent file management system that automatically organizes files based on type, date, and custom rules. The system monitors specified directories and applies organizational logic to maintain clean file structures. Features include duplicate detection, batch processing, and logging.",
    category: "Automation",
    tags: ["Python", "Shutil", "Automation", "File Management"],
    metrics: [
      { label: "Status", value: "Complete", color: "green" },
      { label: "Efficiency", value: "High", color: "blue" },
      { label: "Automation", value: "Full", color: "purple" }
    ],
    date: "2023",
    status: "Complete",
    githubUrl: "https://github.com/John-gram/Python-Projects/blob/main/Automatic%20File%20Sorter%20in%20File%20Explorer.ipynb",
    imageUrl: "/projects/file-organizer.jpg"
  }
];

export const projectCategories = [
  "All",
  "Machine Learning",
  "Research", 
  "Data Engineering",
  "Visualization",
  "Automation"
];
