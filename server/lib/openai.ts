import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  response: string;
}

// Knowledge base about John Ezembu for RAG functionality
const johnEzembuKnowledge = `
John Ezembu - Data Scientist & AI Automation Engineer

EDUCATION:
- Bachelor of Science in Computer Science, Bowen University (2024)
- CGPA: 4.61/5.0 (First-Class Honors)
- Majors: Data Management, Software Engineering, Machine Learning, Project Management

CURRENT POSITION:
- Retail Business Analyst at Meristem Securities Ltd (February 2025 - Present)
- Location: Ikoyi, Lagos State, Nigeria

PREVIOUS EXPERIENCE:
- Data Scientist at Verbum Networks Ltd (January 2023 - July 2024)
- Data Analyst at BOVAS & Company Ltd (January 2022 - October 2022)

KEY ACHIEVEMENTS:
- Increased product uptake by 15% through Python and SQL analytics at Meristem Securities
- Reduced report generation time by 30% using Power BI dashboards
- Reduced processing time by 50% through Excel/VBA automation at Verbum Networks
- Implemented real-time truck tracking using FLEETRAK and IoT at BOVAS

RESEARCH:
- Paper "Multi-Modal Data Fusion With Federated Multi-Head Attention for Diabetic Retinopathy Severity Classification" under review at IEEE (July 2025)
- Authors: Ezembu John, Rita Orji, Oladapo Oyebode
- Focus: Federated learning, multi-modal data fusion, attention mechanisms

MAJOR PROJECTS:
1. Multi-Modal Data Fusion for Diabetic Retinopathy - Federated learning model with attention mechanisms
2. Creditworthiness Prediction Model - 87% F1-score using ensemble methods with SHAP interpretability
3. Real Estate Price Prediction - R² of 0.89 using linear regression and feature engineering
4. COVID-19 Data Exploration - 336k records analysis with 88% accuracy ML model
5. Interactive Tableau Dashboards - Multiple dashboards for different domains
6. Automated File Organizer - Python-based automation system

TECHNICAL SKILLS:
- Programming: Python, SQL, VBA
- Machine Learning: Scikit-learn, PyTorch, CatBoost, XGBoost
- Data Visualization: Tableau, Power BI, Matplotlib, Seaborn
- AI/ML: Federated Learning, Generative AI, RAG, Multi-head Attention
- Other: IoT, Process Automation, System Migration

LEADERSHIP:
- Founder, Bowen Tech Week (January - May 2024) - Secured sponsorships from MTN and Nexascale
- General Secretary, NACOS Bowen (January 2023 - November 2024)

CONTACT:
- Email: johnezembu12@gmail.com
- Phone: +234 704 911 0011
- Location: Lagos, Nigeria
- LinkedIn: https://www.linkedin.com/in/john-ezembu
- GitHub: https://github.com/John-gram

SPECIALIZATIONS:
- Data Science and Machine Learning
- Federated Learning and Privacy-Preserving ML
- Generative AI and RAG systems
- Process Automation and Optimization
- Data Visualization and Business Intelligence
- Multi-modal Data Fusion
`;

export async function chatWithAI({ message }: ChatRequest): Promise<ChatResponse> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: `You are John Ezembu's AI assistant. You help visitors learn about John's background, experience, skills, and projects. 

Use this knowledge base to answer questions accurately:

${johnEzembuKnowledge}

Guidelines:
- Be helpful, professional, and enthusiastic about John's work
- If asked about something not in the knowledge base, politely say you don't have that specific information but encourage them to contact John directly
- Keep responses concise but informative
- Always be encouraging about John's expertise and achievements
- If asked about availability or hiring, mention he's currently employed but may be open to opportunities
- For technical questions, reference his specific projects and achievements`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return {
      response: response.choices[0].message.content || "I'm sorry, I couldn't generate a response. Please try asking your question differently or contact John directly."
    };
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to get AI response. Please try again later.");
  }
}
