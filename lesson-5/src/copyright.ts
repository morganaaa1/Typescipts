// Original JS Code
// const year = document.getElementById('year');
// const thisyear = new Date().getFullYear();
// year.setAttribute('datatime', thisyear);
// year.textContent = thisyear;

// first solution
let year: HTMLElement | null 
year = document.getElementById('year');
let thisyear: string 
thisyear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('datatime', thisyear);
    year.textContent = thisyear;
}