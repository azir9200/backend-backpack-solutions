function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == undefined) {
    return input.toUpperCase();
  } else if (toUpper == true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

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

console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => acc.concat(current), []);
}

const concat = concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return ` Make: ${this.make},  Year: ${this.year}}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
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
console.log(processValue("hello"));
console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
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

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        resolve(n * n);
      } else {
        reject("Error: Negative number not allowed");
      }
    }, 1000);
  });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
