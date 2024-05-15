function addTwo(num:number) {
    // num.toUpperCase()
    return num+2;
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string, email:string, password:string|number){
    console.log(`name is : ${name} \nemail is : ${email} \npassword is : ${password}`)
}

signUpUser("imran","imran@gmail.com",11223344)

console.log(getUpper("imran"))

console.log(addTwo(5));

export{};