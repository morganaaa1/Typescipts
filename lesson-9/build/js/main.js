"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: 'Assignment 1',
    grade: 100
};
console.log(updateAssignment(assign1, { grade: 90 }));
const assignGraded = updateAssignment(assign1, { grade: 90 });
// Required and Readonly
const recordAssignment = (assign) => {
    // Send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
};
const finalGrades = {
    Sara: "A",
    Kelly: "B"
};
const gradeData = {
    Sara: { assign1: 100, assign2: 100 },
    Kelly: { assign1: 90, assign2: 80 }
};
const score = {
    studentId: '123',
    grade: 100
};
const preview = {
    studentId: '123',
    title: 'Assignment 1'
};
// ReturnType
// type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('TypeScript', 100);
console.log(tsAssign);
