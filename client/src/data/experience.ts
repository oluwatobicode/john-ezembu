export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "meristem-securities",
    title: "Retail Business Analyst",
    company: "Meristem Securities Ltd",
    location: "Ikoyi, Lagos State, Nigeria",
    startDate: "February 2025",
    current: true,
    description: "Leading data analytics initiatives to drive business insights and process optimization in the financial services sector.",
    achievements: [
      "Utilized Python and SQL to analyze customer transaction data, leading to targeted marketing strategies that increased product uptake by 15%",
      "Collaborated with the finance team to create dynamic dashboards using Power BI, reducing report generation time by 30%",
      "Identified inefficiencies in the account opening process and implemented automated solutions, resulting in a 20% reduction in processing time"
    ],
    technologies: ["Python", "SQL", "Power BI", "Process Automation"]
  },
  {
    id: "verbum-networks",
    title: "Data Scientist",
    company: "Verbum Networks Ltd", 
    location: "Oyo State, Nigeria",
    startDate: "January 2023",
    endDate: "July 2024",
    current: false,
    description: "Developed data science solutions and automated reporting systems to enhance business operations and decision-making.",
    achievements: [
      "Implemented a new reporting style using MS Excel Pivot and VBA, which reduced processing time by 50%",
      "Generated three process reports weekly for continuous accounts for financial and developmental analysis", 
      "Created a comprehensive data visualization dashboard that led to actionable insights for the company"
    ],
    technologies: ["Excel", "VBA", "Data Visualization", "Financial Analysis"]
  },
  {
    id: "bovas-company",
    title: "Data Analyst",
    company: "BOVAS & Company Ltd",
    location: "Victoria Island, Lagos State, Nigeria", 
    startDate: "January 2022",
    endDate: "October 2022",
    current: false,
    description: "Managed data analysis operations and system maintenance while implementing IoT solutions for fleet tracking.",
    achievements: [
      "Facilitated Real-Time truck tracking by utilizing the FLEETRAK web application and an IoT tracking device",
      "Led the migration of the company's computer systems to the company's domain through scripting automation",
      "Maintained computer systems and generated visualizable reports for management decision-making"
    ],
    technologies: ["IoT", "FLEETRAK", "System Migration", "Scripting"]
  }
];

export const leadership = [
  {
    id: "bowen-tech-week",
    title: "Founder, Bowen Tech Week",
    organization: "Bowen University",
    period: "January - May 2024",
    description: "Convened the largest-ever tech event at Bowen University, orchestrating collaboration with six universities and securing sponsorships from major telecommunications brands including MTN and Nexascale.",
    achievements: [
      "Successfully organized multi-university collaboration event",
      "Secured major sponsorships from MTN and Nexascale", 
      "Facilitated networking for hundreds of tech students"
    ]
  },
  {
    id: "nacos-secretary",
    title: "General Secretary, NACOS Bowen",
    organization: "Nigeria Association of Computing Students",
    period: "January 2023 - November 2024",
    description: "Served as key administrative leader, managing official records, coordinating meetings, and facilitating stakeholder engagement for the computing students association.",
    achievements: [
      "Managed official records and meeting coordination",
      "Facilitated effective communication between members and stakeholders",
      "Maintained accurate member database and engagement metrics"
    ]
  }
];
