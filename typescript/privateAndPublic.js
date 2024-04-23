"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//     email:string
//     private name:string
//     public readonly city:string="Lahore"
//     constructor(email:string, name:string){
//         this.email=email
//         this.name=name
//     }
// }
var User = /** @class */ (function () {
    function User(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.city = "Lahore";
    }
    return User;
}());
// const user = new User("abs@test.com", "abc")
var user = new User("abs@test.com", "abc");
