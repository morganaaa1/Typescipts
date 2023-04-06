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
