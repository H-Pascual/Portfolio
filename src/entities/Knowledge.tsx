export enum KnowledgeType {
    BackEnd,
    FrontEnd,
    BBDD,
    DevOps
}

export interface Knowledge {
    id: string
    name: string
    type: KnowledgeType
    docs: string
    info: string
}