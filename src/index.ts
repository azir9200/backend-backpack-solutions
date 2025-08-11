// 1.Task: Array Filtering and Mapping
const people = [
  { name: "Karina", age: 25, gender: "female" },
  { name: "Rahim", age: 30, gender: "male" },
  { name: "Rubina", age: 22, gender: "female" },
  { name: "Orun", age: 35, gender: "male" },
];

function getMaleNames(arr: any) {
  return arr
    .filter((person: { gender: any }) => person.gender === "male")
    .map((person: { name: any }) => person.name);
}

const result = getMaleNames(people);
console.log(result);

//2 Task: Object Manipulation
const books = [
  { title: "Putul Nacher Itikotha", author: "Manik Bandopadhyay", year: 1936 },
  {
    title: "Pather Panchali",
    author: "Bibhutibhushan Bandopadhyay",
    year: 1929,
  },
  { title: "Srikanta", author: "Sarat Chandra Chattopadhyay", year: 1917 },
  { title: "Devdas", author: "Sarat Chandra Chattopadhyay", year: 1917 },
  { title: "Chokher Bali", author: "Rabindranath Tagore", year: 1903 },
];

function getBookTitles(bookArray: any[]) {
  return bookArray.map((book: { title: any }) => book.title);
}

const titles = getBookTitles(books);
// console.log(titles);

// 3.Task: Function Composition
function square(num: number) {
  return num * num;
}

function double(num: number) {
  return num * 2;
}

function addFive(num: number) {
  return num + 5;
}

function composedFunction(num: number) {
  return addFive(double(square(num)));
}

// console.log(composedFunction(3));

// 04. Task: Find Maximum Value

function findMaxValue(numbers: any[]) {
  if (numbers.length === 0) {
    return null;
  }
  return Math.max(...numbers);
}

const arr = [3, 7, 2, 9, 5];
// console.log(findMaxValue(arr));

// 5  Task: Unique Values
const numbers = [1, 3, 5, 3, 7, 1, 9, 5];

function getUniqueValues(arr: any) {
  return [...new Set(arr)];
}
const uniqueNumbers = getUniqueValues(numbers);
console.log(uniqueNumbers);
