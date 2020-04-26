export interface IProgram {
    id: string,
    name: string,
    status: {
        id: number,
        name: string
    },
    major: {
        name: string
    },
    text: string,
    requirements: string
}