type User = {
    name : string;
    email:string;
    isPaid:boolean;
}

function createUser(user:User):User{
    return {name:"imran", email:"abc@test.com", isPaid:false}
}

createUser({name:"imran", email:"abc@test.com", isPaid:false})

export{}