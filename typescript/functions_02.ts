function addTwo(val:number):number{
    return val+2;
    // return "imran"
}

function getValue(myVal:number):boolean|string{
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

const getHello = (s:string):string=>{
    return "Hello world"
}

// const heros = ["thor", "ironman", "spiderman", "hulk"]
const heros = [1, 2, 3, 4]
heros.map((hero:number):number => {
    return hero
    console.log(hero)
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

handleError("Error 505")

consoleError("Error 404")


let val = getValue(4);

console.log(val);

let sum=addTwo(5);

console.log(sum);

export{}