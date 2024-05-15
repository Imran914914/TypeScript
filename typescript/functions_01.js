"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password) {
    console.log("name is : ".concat(name, " \nemail is : ").concat(email, " \npassword is : ").concat(password));
}
signUpUser("imran", "imran@gmail.com", 11223344);
console.log(getUpper("imran"));
console.log(addTwo(5));
