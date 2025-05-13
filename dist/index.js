"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
function filterByRating(items) {
    const books = items.filter((item) => item.rating >= 4);
    return books;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, current) => acc.concat(current), []);
}
const concat = concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return ` Make: ${this.make},  Year: ${this.year}}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
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
console.log(processValue("hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let maxProduct = products[0];
    for (let product of products) {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    }
    return maxProduct;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);
console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    let weekend;
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
getDayType(Day.Monday);
console.log(getDayType(Day.Monday));
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n > 0) {
                    resolve(n * n);
                }
                else {
                    reject("Error: Negative number not allowed");
                }
            }, 1000);
        });
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
