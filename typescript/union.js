"use strict";
//Union is combination of two or more types
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "34";
score = 23;
var nameOfUser = { name: "nameofuser", id: 12345 };
nameOfUser = { name: "name", id: 12345 };
nameOfUser = { username: "user", id: 12345 };
var nameOfAdmin = { username: "nameofadmin", id: 12345 };
nameOfAdmin = { name: "name", id: 12345 };
nameOfAdmin = { username: "Admin", id: 12345 };
// function getDbId (id: number|string){
//     console.log(`DB Id is ${id}`)
// }
getDbId("3");
getDbId(3);
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    if (typeof id === "number") {
        id.toFixed();
    }
}
// array
// const arr = [1,2,3,4];
// const arr:string[]|number[] = [1,2,3,4];
// const arr:(string|number)[] = [1,2,3,4,"6","5"];
// console.log(arr);
var arr = [1, 2, 3, 4, "6", "5", true, false];
console.log(arr);
var pi = 3.14;
// pi = 3.145;          //error    can't
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
