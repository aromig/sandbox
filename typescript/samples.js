var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = false;
var lines = 42;
var myName = "Adam";
var notSure = 4;
notSure = "maybe it's really a number";
notSure = true;
var numCatLives = 9;
// numCatLives = 1; // error because it's a constant
// collections: typed arrays and generic arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// enumerations
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// void type for functions that return nothing
function justSay(message) {
    console.log(message);
}
// these are the same
var f1 = function (i) {
    return i * i;
};
var f2 = function (i) {
    return i * i;
};
var f3 = function (i) {
    return i * i;
};
var f4 = function (i) {
    return i * i;
};
var f5 = function (i) { return i * i; };
// object that implements an interface
var p1 = {
    full_name: "Adam",
    height: 68,
    weight: 165,
    move: function () { }
};
// the names of the parameters don't matter, just the types
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
// Classes
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    // static members
    Point.origin = new Point(0, 0);
    return Point;
}());
// inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    // can overwrite the method
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
// modules
var Geometry;
(function (Geometry) {
    var Square = /** @class */ (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var squareOne = new Geometry.Square(5);
// squareOne.area() == 25
// can alias a module with import
var G = Geometry;
var squareTwo = new G.Square(10);
// generics
var Tuple = /** @class */ (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
var pairToTuple = function (p) {
    return new Tuple(p.item1, p.item2);
};
var tuple = pairToTuple({
    item1: "hello",
    item2: "world"
});
// readonly
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2019;
        // can assign to a readonly in the constructor
        this.make = "Unknown Make";
        this.model = "Unknown Model";
    }
    return Car;
}());
var numbers = [0, 1, 2, 3, 4];
var moreNumbers = numbers;
// iterators
// for...of
var arrayOfAnyType = [1, "string", false];
for (var _i = 0, arrayOfAnyType_1 = arrayOfAnyType; _i < arrayOfAnyType_1.length; _i++) {
    var val = arrayOfAnyType_1[_i];
    // console.log(val); // 1, "string", false
}
var list = [4, 5, 6];
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var item = list_1[_a];
    // console.log(item); // 4, 5, 6
}
// for...in
for (var item in list) {
    console.log(item);
}
