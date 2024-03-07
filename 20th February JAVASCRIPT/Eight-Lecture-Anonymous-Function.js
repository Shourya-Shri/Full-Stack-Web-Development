// Introduction to Anonymous functions?

//=> Annonymous functions in javScript are functions that do not have any name. Named functions are simply functions, that have some name associated with them, you can consider them as the normal javaScript function we use.
//An anonymous function is a function that is defined without a name. It can be assigned to a variable or passed as an argument to another function.

/*function(){
    console.log("Hi")
}  Wrong way*/

let x=function(){
    console.log("Hi");
}
x();   /*Correct Way*/

(function exec(){
    console.log("named")
})() //Immediately invoked  function expression (IIFE) that is it can used only once at the specified place only and it called be used or called after.

(function(x){
    return x*x
})(5)     /*Another correct way, passing an argument to the anonymous function */