class User{
    public _courseCount=1
    readonly city:string="Lahore"
    constructor(
        public email:string,
        private name:string
    ){
        
    }

    public deleteToken(){
        console.log("Token deleted")
    }

    get appleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum:number){
        courseNum=0
        if(courseNum<1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const user = new User("abc@test.com", "abc")
user.deleteToken()
export {}