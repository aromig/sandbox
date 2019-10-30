let isDone: boolean = false;
let lines: number = 42;
let myName: string = "Adam";
let notSure: any = 4;
notSure = "maybe it's really a number";
notSure = true;

const numCatLives = 9;
// numCatLives = 1; // error because it's a constant

// collections: typed arrays and generic arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// enumerations
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

// void type for functions that return nothing
function justSay(message: string): void {
  console.log(message);
}

// these are the same
let f1 = function(i: number): number {
  return i * i;
};
let f2 = function(i: number) {
  return i * i;
};
let f3 = (i: number): number => {
  return i * i;
};
let f4 = (i: number) => {
  return i * i;
};
let f5 = (i: number) => i * i;

// interfaces
interface IPerson {
  full_name: string; // read only
  height: number;
  weight: number;
  age?: number; // ? makes the property optional
  move(): void;
}

// object that implements an interface
let p1: IPerson = {
  full_name: "Adam",
  height: 68,
  weight: 165,
  move: () => {}
};

// interface for a function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// the names of the parameters don't matter, just the types
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
  return src.search(sub) != -1;
};

// Classes
class Point {
  x: number; // members are public by default

  constructor(x: number, public y: number = 0) {
    this.x = x;
  }

  dist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // static members
  static origin = new Point(0, 0);
}

// inheritance
class Point3D extends Point {
  constructor(x: number, y: number, public z: number = 0) {
    super(x, y);
  }

  // can overwrite the method
  dist() {
    let d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

// modules
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {}
    area() {
      return this.sideLength ** 2;
    }
  }
}

let squareOne = new Geometry.Square(5);
// squareOne.area() == 25

// can alias a module with import

import G = Geometry;
let squareTwo = new G.Square(10);

// generics
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {}
}

interface Pair<T> {
  item1: T;
  item2: T;
}

let pairToTuple = function<T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2);
};

let tuple = pairToTuple({
  item1: "hello",
  item2: "world"
});

// readonly
class Car {
  readonly make: string;
  readonly model: string;
  readonly year = 2019;

  constructor() {
    // can assign to a readonly in the constructor
    this.make = "Unknown Make";
    this.model = "Unknown Model";
  }
}

let numbers: Array<number> = [0, 1, 2, 3, 4];
let moreNumbers: ReadonlyArray<number> = numbers;

// iterators

// for...of - iterates over values
let arrayOfAnyType = [1, "string", false];
for (const val of arrayOfAnyType) {
  // console.log(val); // 1, "string", false
}

let list = [4, 5, 6];
for (const item of list) {
  // console.log(item); // 4, 5, 6
}

// for...in - iterates over keys
for (const item in list) {
  console.log(item);
}
