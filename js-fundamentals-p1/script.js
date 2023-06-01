const country = 'Ukraine';
const continent = 'Europe';
let population = 46;

console.log(country, continent, population);

const isIsland = false;
let language;

console.log(typeof country, typeof population, typeof isIsland, typeof language);

language = 'ukrainian';

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

const avaragePopulation = 33;
console.log(population > avaragePopulation);

let description = country + ' is in ' + continent + ', and its ' + population + ' milion people speak ' + language;
console.log(description);

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markHeigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHeigherBMI);

description = `${country} is in ${continent}, and its ${population} milion people speak ${language}`;
console.log(description);