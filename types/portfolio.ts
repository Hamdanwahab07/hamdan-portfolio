
export interface Profile {
  name: string;
  title: string;
  address: string;
  email: string;
  phone: string;
  social: {
    linkedin: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
}

export interface Skills {
  cybersecurity: string[];
  programming: string[];
  development: string[];
  business_and_analytics_tools: string[];
  core_strengths: string[];
  soft_skills: string[];
  languages: string[];
}

export interface PortfolioData {
  profile: Profile;
  summary: string;
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  achievements: string[];
  skills: Skills;
}
