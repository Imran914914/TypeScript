//Union is combination of two or more types

let score: number|string = 33;
score = "34";
score = 23;
// score = true

type User ={
    name:string;
    id:number;
}
type Admin ={
    username:string;
    id:number;
}

let nameOfUser: User|Admin = {name:"nameofuser", id:12345}
nameOfUser = {name:"name", id:12345}
nameOfUser = {username:"user", id:12345}
let nameOfAdmin: User|Admin = {username:"nameofadmin", id:12345}
nameOfAdmin = {name:"name", id:12345}
nameOfAdmin = {username:"Admin", id:12345}

// function getDbId (id: number|string){
//     console.log(`DB Id is ${id}`)
// }

getDbId("3")
getDbId(3)

function getDbId (id: number|string ){
    if(typeof id === "string"){
        id.toUpperCase();
    }
    if(typeof id === "number"){
        id.toFixed();
    }
}

// array
// const arr = [1,2,3,4];
// const arr:string[]|number[] = [1,2,3,4];
// const arr:(string|number)[] = [1,2,3,4,"6","5"];
// console.log(arr);
const arr:(string|number|boolean)[] = [1,2,3,4,"6","5",true,false];
console.log(arr);

let pi:3.14 = 3.14;
// pi = 3.145;          //error    can't

let seatAllotment: "aisle"|"middle"|"window";
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
// seatAllotment = "business";        //error  can't 

export {};