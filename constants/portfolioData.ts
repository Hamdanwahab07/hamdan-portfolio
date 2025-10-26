import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: "HAMDAN ABDUL WAHAB",
    title: "Computer Science Graduate",
    address: "Dammam, Saudi Arabia",
    email: "hamdanabdulwahab360@gmail.com",
    phone: "+966 50 312 7058",
    social: {
      linkedin: "https://linkedin.com/in/hamdanabdulwahab"
    }
  },
  summary: "Computer Science graduate and Cybersecurity master’s student with strong interest in computer networks, cybersecurity, and system troubleshooting. Skilled in configuring, monitoring, and securing networks, with hands-on experience in Wireshark, Packet Tracer, and networking protocols (TCP/IP, DNS, DHCP, VPN). Proven ability in full-stack development, IT support, and project deployment, combining software and networking expertise to deliver reliable solutions.",
  experience: [
    {
      role: "Software Engineer",
      company: "QuickMinds Labs.",
      location: "United States (Remote)",
      period: "04/2025 – present",
      points: [
        "Collaborate with cross-functional teams to deliver scalable solutions and ensure smooth deployments.",
        "Assisted in network-related configurations for remote development environments, ensuring secure access and connectivity.",
        "Applied agile methodologies while monitoring system performance and troubleshooting issues including connectivity and server communication."
      ]
    },
    {
      role: "Product Specialist",
      company: "GOA Tek Inc.",
      location: "Australia (Remote)",
      period: "08/2024 – 11/2024",
      points: [
        "Researched and consolidated product data across multiple platforms.",
        "Worked with team members remotely using secure VPN connections to manage workflow and ensure data protection.",
        "Gained exposure to cloud-based systems and networking concepts while streamlining product data management."
      ]
    },
    {
      role: "Software Intern",
      company: "Sulzer Ltd.",
      location: "Mumbai, India",
      period: "04/2023 – 06/2023",
      points: [
        "Supported IT team in troubleshooting connectivity and configuration issues for internal tools.",
        "Organized and structured product and system data for network-based access, improving retrieval efficiency."
      ]
    },
    {
      role: "Java Developer",
      company: "BarkNifties Ltd.",
      location: "Mumbai, India",
      period: "04/2021 – 07/2021",
      points: [
        "Developed Java-based applications to collect and process product information.",
        "Worked on server-side deployments that involved API communication and network configuration for secure access."
      ]
    },
    {
      role: "Freelancing Projects",
      company: "Self-employed",
      location: "Remote",
      period: "06/2020 – Present",
      points: [
        "Designed and deployed websites and mobile apps, managing hosting, DNS setup, and server security.",
        "Built a cross-platform mobile app hosted on Firebase, implementing authentication and secure data communication.",
        "Configured small-scale simulated networks using Cisco Packet Tracer, including routers, switches, and VLANs."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "King Fahd University of Petroleum & Minerals (KFUPM)",
      location: "Dhahran, Saudi Arabia",
      period: "Present - Expected 2027",
      details: "Pursuing advanced studies in cybersecurity."
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Amity University",
      location: "Mumbai, India",
      period: "2020 - 2024",
      details: "CGPA: 8.0"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "MES Raja Residential School",
      location: "Kerala, India",
      period: "Pass out: 2020",
      details: "Percentile: 81%"
    }
  ],
  certificates: [
    { title: "React Native Development", issuer: "Coursera", year: "2025" },
    { title: "Networking Basics & Troubleshooting", issuer: "Cisco NetAcad", year: "Present" },
    { title: "Google Digital Marketing & E-commerce", issuer: "Google", year: "2024" },
    { title: "Data Science Orientation", issuer: "IBM", year: "2024" },
    { title: "Web Development", issuer: "Udemy, Arizona University", year: "2022" }
  ],
  achievements: [
    "Participated in a hackathon, developing a problem-solving prototype.",
    "Led the planning and execution of “Technicia,” a university-level student tech event.",
    "Football captain at college; represented school at the national level."
  ],
  skills: {
    cybersecurity: ["Network Monitoring", "Penetration Testing Basics", "Risk Assessment", "Wireshark"],
    programming: ["Python", "C", "C++", "Java", "SQL", "HTML", "CSS"],
    development: ["React Native", "Firebase", "Visual Studio Code"],
    business_and_analytics_tools: ["Odoo ERP", "Zoho Analytics"],
    core_strengths: ["Secure Coding Practices", "Problem-Solving", "System Analysis"],
    soft_skills: ["Communication", "Teamwork", "Critical Thinking", "Adaptability", "Leadership", "Creativity"],
    languages: ["English", "Hindi", "Arabic", "German", "Malayalam"]
  }
};