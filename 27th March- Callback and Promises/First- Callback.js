// A function which has a function as a parameter are known as highes order function.

// What is callbacks? => A callback is a function that is passed as an argument to another function, and is executed by that function at a later time. In other words, a callback is a function that is "called back" by another function.

function h(x,fn){
    console.log(x*x);
    fn();
}
h(10, function(){
    console.log("Done with the callback");
})

function h1(x,fn){
    console.log(x*x);
    fn(x*x);
}

function exec(n){
    console.log("squared value is", n)
}

h1(10,exec);

// Below is also a callback function and is a Asynchronus piece of code

// What is Asynchronus piece of code?=> Asynchronous code is a type of programming paradigm where the execution of the code is not sequential. In other words, the code does not execute in a linear fashion, one line after another. Instead, certain tasks are executed in the background, allowing other tasks to run concurrently.


// JAVASCRIPT, by default is a synchronus language.
console.log("start")
setTimeout(function f(){
    console.log("Timer Done");
}, 3000)

console.log("end")

// Browser and Node are just the runtime environment in which we execute javascript.
/*
setTimeout(function f(){
    console.log("Timer Done");
}, 3000)

Because this is the feature of run time, so it will trigger runtime and will not wait for the code to execute first, leading to which will make the callback Asynchronus.
*/

console.log("start")
setTimeout(function f(){
    console.log("Timer Done");
}, 3000)

console.log("end")

for(let i=0;i<1000000;i++){}