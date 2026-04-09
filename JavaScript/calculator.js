
// CALCULATOR -using high order function and callback function

// create a calculator that recieves multiple values and perform operation(addition,subtraction,multiplication,division,modulus,concatenation)

function calculator(value1,value2,callbackfn){
    return callbackfn(value1,value2)
}

let sumOpr=calculator(10,20,(a,b)=>a+b)
console.log(sumOpr)

let subOpr=calculator(20,10,(a,b)=>a-b)
console.log(subOpr)

let mulOpr=calculator(2,3,(a,b)=>a*b)
console.log(mulOpr)

let modOpr=calculator(5,2,(a,b)=>a%b)
console.log(modOpr)

let concatOpr=calculator("anugya ","verma",(a,b)=>a+b)
console.log(concatOpr)


