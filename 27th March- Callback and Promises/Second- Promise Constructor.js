function createPromise(){
    return new Promise(function exec(resolve, reject){
        // Your code goes here

        setTimeout(function f(){
            console.log("timer done");
            //resolve("done")
            reject("Done")
        },3000);
    });
}
console.log("start");
let x=createPromise();

console.log("Got a new promise");
x.then(function f(value){  //Means when the promise function will get exectuted....................This f function will wait in microtask queue.
    console.log("Promise done",value);
}).catch(function g(){
    console.log("HANDLED")
}).finally(function fn(){
    console.log("finally")
})
console.log("End")

for(let i=0;i<10000000000;i++){

}