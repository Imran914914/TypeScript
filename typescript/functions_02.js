"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(val) {
    return val + 2;
    // return "imran"
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "Hello world";
};
// const heros = ["thor", "ironman", "spiderman", "hulk"]
var heros = [1, 2, 3, 4];
heros.map(function (hero) {
    return hero;
    console.log(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
handleError("Error 505");
consoleError("Error 404");
var val = getValue(4);
console.log(val);
var sum = addTwo(5);
console.log(sum);
