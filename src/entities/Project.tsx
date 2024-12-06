import { Knowledge } from "./Knowledge";

export enum Difficulty {
    Easy,
    Medium,
    Hard,
    VeryHard
}

export interface Project {
    id: string;
    title: string;
    creationDate: string
    description: string;
    technologies: Knowledge[]
    difficulty: Difficulty,
    images: string[]
    githubLink: string
    deployedLink: string | null
}