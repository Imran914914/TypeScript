"use strict";
// const user = {
//     name : "imran",
//     email: "imran@gmail.com",
//     isActive: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "imran", email: "imran@gmail.com", isActive: true };
    // return user.email
}
var obj = createUser({ name: "imran", email: "imran@gmail.com", isActive: true });
console.log(obj);
