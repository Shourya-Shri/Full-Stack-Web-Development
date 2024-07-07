function createPromise(){
    return new Promise(function exec(resolve, reject){
        // Your code goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve("10")
        },3000);
    });
}

async function consume(){ //Always return promise
    return 10;
}
console.log(consume())

async function consume1(){
    console.log("Inside function");
    const response=await createPromise();
    console.log("Response is", response);
}
console.log("Start")
consume1(); 
console.log("End")