const user = {
    name : "imran",
    email: "imran@gmail.com",
    isActive: true
}

function createUser({name:string, isPaid:boolean}){}

function createCourse():{name:string, price:number}{
    return {name:"typescript", price:399};
}

let newUser = {name:"imran", isPaid:false, email:"imran@gmial.com"}

createUser(newUser);
createCourse()

export{}