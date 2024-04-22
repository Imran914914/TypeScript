type User = {
    readonly _id:string;// readonly keyword
    name:string;
    email:string;
    isActive:boolean;
    creditCardDetail?:number;// optional operater (?)
}

let createUser:User = {
    _id:"12345",
    name:"imran",
    email:"abc@test.com",
    isActive:true
}

createUser.email="xyz@test.com";
createUser.isActive=false;
createUser.name="imran ali";
// createUser._id="3333";