const _ = require('lodash');

// let obj = {};

// obj.a = 42;
// Object.defineProperty(obj, 'b', {
//   value: 'valueB',
//   configurable: true,
// });
// Object.defineProperty(obj, 'c', {
//   value: 'valueC',
//   enumerable: true,
//   writable: true,
// });
// Object.defineProperty(obj, 'd', {
//   value: 'valueD',
//   enumerable: false,
// });

// console.log('obj.a =', obj.a, 'obj.b =', obj.b, 'obj.c =', obj.c );
// obj.a = 142; obj.b = 'newValueB'; obj.c = 'newObjectC';
// console.log('obj.a =', obj.a, 'obj.b =', obj.b, 'obj.c =', obj.c);

// Object.defineProperty(obj, 'b', {
//   writable: true,
// });

// obj.b = 'newValueB';
// console.log('obj.a =', obj.a, 'obj.b =', obj.b, 'obj.c =', obj.c);

// // let objStrForIn = '', objStrForOf;
// // for (key in obj) { objStrForIn += key};
// // // for (let i = 0; i <= obj.length; i++) objStrForIn += obj[i];

// // console.log(...Object.entries(obj));
// // console.log(...Object.values(obj));
// // console.log(objStrForIn);
// // // console.log(o);


function myclass() {}

let value_1;
Object.defineProperty(myclass.prototype, 'x1', {
  get() { return value_1; },
  set(x) { value_1 = x; },
});

let value_2;
Object.defineProperty(myclass, 'x2', {
  get() { return value_2; },
  set(x) { value_2 = x; },
});

let value_3;
Object.defineProperty(myclass, 'x3', {
  get() { return this.value_3; },
  set(x) { this.value_3 = x; },
});

const a = new myclass();
const b = new myclass();
a.x1 = 1;
a.x2 = 2;
a.x3 = 3;

console.log('with myclass.prototype:'.padEnd(40), 'value_1 =', value_1, 'a.x1 =', a.x1, 'b.x1 =', b.x1); // 1
console.log('with myclass.prototype && this.property:'.padEnd(40), 'value_3 =', value_3, 'a.x3 =', a.x3, 'b.x3 =', b.x3); // 1
console.log('without myclass.prototype:'.padEnd(40), 'value_2 =', value_2, 'a.x2 =', a.x2, 'b.x2 =', b.x2); // 1



this.x1 = 'GLOBALX1';
const x2 = 'GLOBALX2';

console.log('a.toString'.padEnd(70), a.toString());

myclass.prototype.toString = () => `this object has two properties ${this.x1} and ${this.x2}`;
const testObj = { x1: 'TESTObjX1', x2: 'TESTObjX2', runBorrowedToString: a.toString };

console.log('a.toString() myclass.prototype with () => {}'.padEnd(70), a.toString());
console.log('testObj.a.toString() myclass.prot with () => {}'.padEnd(70), testObj.runBorrowedToString());

myclass.prototype.toString = function gotToString() { return `this object has two properties ${this.x1} and ${this.x2}`; };
console.log('a.toString() myclass.prototype with function(){}'.padEnd(70), a.toString());
console.log('testObj.a.toString() myclass.prot with function(){} before override'.padEnd(70), testObj.runBorrowedToString());
testObj.runBorrowedToString = a.toString;
console.log('testObj.a.toString() myclass.prot with function(){} after override'.padEnd(70), testObj.runBorrowedToString());
console.log('testObj.a.toString() myclass.prot with call() && -//-'.padEnd(70), testObj.runBorrowedToString.call(this));
console.log()
console.log([a, b]);


let obj1 = {a: 42, b: 'foo', };
let obj2 = { b: 'foo', a: 42, };
let obj3 = { a: 42, b: 'foo', obj2};
let obj4 = { b: 'foo', a: 42, obj1 };
console.log('_.isEqual(obj1, obj2) =', _.isEqual(obj1,obj2));
console.log('_.isEqual(obj3, obj4) =', _.isEqual(obj3, obj4));
console.log('_.isEqual(obj3.obj2, obj4.obj1) =', _.isEqual(obj3.obj2, obj4.obj1));
console.log({obj1, obj2, obj3, obj4})