// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: '123',
    title: 'Assignment 1',
    grade: 100
}

console.log(updateAssignment(assign1, { grade: 90 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 90 })

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // Send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

recordAssignment({ ...assignGraded, verified: true })

// Record
const hexColorMap: Record<string, string> = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "F"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "B"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 100, assign2: 100 },
    Kelly: { assign1: 90, assign2: 80 }
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: '123',
    grade: 100
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: '123',
    title: 'Assignment 1'
}

// Exclude and Extract

type adjustGrade = Exclude<LetterGrades, "F">

type highGrades = Extract<LetterGrades, "A" | "B">

// NonNullable

type AllPossibleGrades = 'Ali' | 'Bob' | 'Cindy' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('TypeScript', 100)
console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['JavaScript', 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))