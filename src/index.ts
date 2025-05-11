// Problem 1:

import { current } from "@reduxjs/toolkit";

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == undefined) {
    return input.toUpperCase();
    console.log(formatString("Hello", false));
    // console.log(formatString("Hello", true));
  } else if (toUpper == true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

// Problem 2:

// function filterByRating(
//   items: { title: string; rating: number }[]
// ): { title: string; rating: number }[] {
//   return items.filter((item) => item.rating >= 4);
// }

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
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
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => acc.concat(current), []);
}

const concat = concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem 4:
class Vehicle {
  private make: string;
  private year: number;
  model: string;

  constructor(make: string, year: number, model: string) {
    (this.make = make), (this.year = year);
    this.model = model;
  }

  getInfo(): string {
    return `azir: Make: ${this.make},  Year: ${this.year}, Model:${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, model: string) {
    super(make, year, model);
  }
  getModel(): string {
    return `Model:  ${this.model} ,  `;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
console.log(myCar.getInfo());
console.log(myCar.getModel());

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}
console.log(processValue("hello"), processValue(10));
// Problem 6
 
 interface Product {
  name: string;
  price: number;
}



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
