// class User {
//     email:string
//     private name:string
//     public readonly city:string="Lahore"
//     constructor(email:string, name:string){
//         this.email=email
//         this.name=name
//     }
// }
class User {
    public readonly city:string="Lahore"
    constructor(
        public email:string, 
        private name:string,
        public age?:number
    ){
    }
}


// const user = new User("abs@test.com", "abc")
const user = new User("abs@test.com", "abc")
// user.city = "chakwal"
// user.city
// user.name="xyz"
export{}