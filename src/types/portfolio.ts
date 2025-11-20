export interface PersonalInfo {
  fullName: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  name: string
  type?: string
  liveDemo?: string
  github?: string
  description: string
  technologies: string[]
  image?: string
}

export interface Education {
  institution: string
  degree: string
  field?: string
  duration: string
}

export interface Language {
  language: string
  level: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  professionalSummary: string
  topSkills: string[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  certifications: string[]
  languages: Language[]
}
