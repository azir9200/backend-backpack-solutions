"use strict";
// Problem 1:
function formatString(input, toUpper) {
    if (toUpper == undefined) {
        return input.toUpperCase();
    }
    else if (toUpper == true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
// Problem 2:
function filterByRating(items) {
    const books = items.filter((item) => item.rating >= 4);
    return books;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
// console.log(filterByRating(books));
// Problem 3:
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, current) => acc.concat(current), []);
}
const concat = concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Problem 4:
class Vehicle {
    constructor(make, year, model) {
        this.make = make;
        this.year = year;
        this.model = model;
    }
    getInfo() {
        return ` Make: ${this.make},  Year: ${this.year}, Model:${this.model}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year, model);
    }
    getModel() {
        return `Model:  ${this.model} ,  `;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
console.log(myCar.getInfo());
console.log(myCar.getModel());
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
console.log(processValue("hello"), processValue(10));
// function getMostExpensiveProduct(products: Product[]): Product | null {
//   if (products.length === 0) return null;
//   return products.reduce((maxProduct, currentProduct) =>
//     currentProduct.price > maxProduct.price ? currentProduct : maxProduct
//   );
// }
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];
// getMostExpensiveProduct(products);
// console.log(products);
// Problem 7:
// enum Day {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }
// function getDayType(day: Day): string {
//   if (day === Day.Saturday || day === Day.Sunday) {
//     return "Weekend";
//   }
//   return "Weekday";
// }
// console.log(getDayType(Day.Monday));
