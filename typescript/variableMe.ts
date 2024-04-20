let greetings:string = "hello";

// syntax ======>  <=>  let/var/const variableName : Type = Value  <=>;

// safety that typescript gives
// greetings=5   //type 'number' is not assignable to type 'string'
// greetings=true   //type 'boolean' is not assignable to type 'string'

let myNum = 6;

// myNum.toUpperCase(); //Property/method 'toUpperCase' does not exist on type 'number'.
// greetings.toUpperCase(); // there is no problem

console.log(greetings);

export{};