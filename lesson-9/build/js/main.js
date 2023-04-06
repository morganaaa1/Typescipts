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
