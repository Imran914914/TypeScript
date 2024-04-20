"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hello";
// syntax ======>  <=>  let/var/const variableName : Type = Value  <=>;
// safety that typescript gives
// greetings=5   //type 'number' is not assignable to type 'string'
// greetings=true   //type 'boolean' is not assignable to type 'string'
var myNum = 6;
// myNum.toUpperCase(); //Property/method 'toUpperCase' does not exist on type 'number'.
// greetings.toUpperCase(); // there is no problem
console.log(greetings);
