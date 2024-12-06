import { Knowledge } from "./Knowledge"

export enum ExperienceType {
    Job,
    Education,
    Achievements,
    Qualification,
    Others
}

export interface Experience {
    id: string
    title: string
    experienceType: ExperienceType
    description: string | null
    technologies: Knowledge[]
    date: string | null
    startDate: string | null
    endDate: string | null
    company: string
    reference: string
}