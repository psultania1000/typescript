console.log("typescript");

let nam: string = "priyansh";
nam = "sultania";

let num: number = 21;
num = 12;

// We can create a variable which can have multiple types.

let variable: number | string | boolean = "Now it can be anything"; // This is called union types
variable = true;
variable = 4;

let request: "sucess" | "reject" | "error" = "error"; // Now it will accept only these 3 values.
request = "reject";

let notSure: any = 4; // It can be of any type, have a good reason to use this type
notSure = true;

// If we dont assign to the variable while define it. Its type annotation will be any.
const names = ["priyansh", "utsav", "ashish", "gourav"];

let foundName;

for (let name of names) {
  if (name === "utsav") {
    foundName = "utsav";
    break;
  }
}

console.log(foundName);

// If the variable is undefined and we are expecting a string type then we can put optional chaining even to the methods
console.log(foundName?.charAt(0));

let prices: number[] = [20, 34, 345, 65]; // This variable will be array of numbers
console.log(prices);

let anyArray = []; // Type any for array i.e., any type can be stored here

/**
 * Now we will do the same thing with objects
 */

let car: { brand: string; year: number } = { brand: "toyota", year: 2021 };
car.brand = "volkswagon";

let book = { title: "hobbits", price: 200 };
let pen = { title: "pentonic", price: 10 };
let notebook = { title: "copy" };

let items: { title: string; price?: number }[] = [book, pen, notebook]; //Since we added optional properties, we can add notebook
console.log(items[0]);

let readItems: { readonly title: string; price?: number } = [
  book,
  pen,
  notebook,
];

let bikes: { brand: string; year?: number; isWorking: boolean }[] = [
  { brand: "yamaha", year: 2020, isWorking: true },
  { brand: "sukuzi", year: 2021, isWorking: true },
  { brand: "hero", isWorking: false },
];

function greetings(name: string) {
  console.log(`Hello ${name.toUpperCase()}`);
}

greetings("Priyansh");

function calculateDiscount(price: number) {
  // Hover over the function. What do you notice?
  return price * 0.9;
}

console.log(calculateDiscount(100));

function addNumber(number: any) {
  // This is of type any
  let anotherNumber: number = 3;
  return anotherNumber + number;
}

const result = addNumber(4);
const someValue = result; // This is also of type any for same reason

const names1: string[] = ["priuansh", "utsab", "ashihsh", "gourva"];

function isNameInTheList(name: string) {
  return names1.includes(name);
}

console.log(isNameInTheList("priuansh"));

function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

console.log(calculatePrice(30));

function calculateScore(initial: number, penalty: number = 0) {
  // To add default value
  return initial - penalty;
}

function sum(message: string, ...numbers: number[]) {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result1 = sum("The total is : ", 1, 2, 3, 4, 5);

function logMessage(message: string) {
  console.log(message);
}

logMessage("Hello, World!");

// Functions: Using Union Types as function parameters

function processInput(args: string | number) {
  if (typeof args === "number") {
    // Read about type guard
    console.log(args * 2);
  } else if (typeof args === "string") {
    console.log(args.toUpperCase());
  }
}

processInput(3);
processInput("priyansh");

/**
 * Objects as parameters in the functions
 */

function createEmployee({ id }: { id: number }): {
  id: number;
  isValid: boolean;
} {
  return { id, isValid: id % 2 === 0 };
}
