export interface Person {
    name: string,
    age: number,
    email?: string
}

export interface ProfileProps {
    student: Person,
    message: string
}