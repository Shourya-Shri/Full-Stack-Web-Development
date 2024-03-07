// Introduction to functions in JavaScript.

// In Js, Functions are first-class citizens.
//=> Functions in Js are first-class citizens, meaning they can be assigned to variable, passed as arguments to other functions, and returned from funtions.

function functionName(){
    // function body
}

function greet(){
    console.log("Hi there!")
    console.log("How are you?")
}
let a=greet();  // calling the function
console.log(a);   // undefined because greet doesn't return anything

function sqr(x){
    console.log(x*x);
}
function sqr(x){
    return x*x;
}
sqr(8)

let b=sqr(7)
console.log(b)