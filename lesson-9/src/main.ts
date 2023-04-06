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