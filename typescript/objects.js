"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "imran",
    email: "imran@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
function createCourse() {
    return { name: "typescript", price: 399 };
}
var newUser = { name: "imran", isPaid: false, email: "imran@gmial.com" };
createUser(newUser);
createCourse();
