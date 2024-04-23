interface User {
    readonly dbId: number,
    email:string,
    userId:number,
    googleId?:number,
    startTrail:() => string,
    startTrail1():string,
    getCoupon?(coupenname:string, value:number):number
} 

// re-opening and inherit interface
//re-opening
interface User {
    githubToken:string
}

//inherit (we can inherit interface with keyword 'extends')
// syntax   interface NewinterfaceName extends NameofParentinterface
interface Admin extends User{
    role: "leader"|"manager"|"employee"
}

const user :Admin|User = {dbId:123,githubToken:"github",email:"abs@test.com", userId:123, googleId:123,startTrail:()=>{
    return "";
},
role:"leader",
startTrail1:()=>{
    return ""
},
getCoupon:(name:"abc",val:123)=>{
return 123
}
}

// const user :User = {dbId:123,githubToken:"github",email:"abs@test.com", userId:123, googleId:123,startTrail:()=>{
//     return "";
// },
// startTrail1:()=>{
//     return ""
// },
// getCoupon:(name:"abc",val:123)=>{
// return 123
// }
// }

user.email = "xyz@test.com";

// user.dbId=123;

export {}