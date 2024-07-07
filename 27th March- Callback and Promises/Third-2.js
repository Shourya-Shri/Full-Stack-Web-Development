//REJECT

function createPromise(){
    return new Promise(function exec(resolve, reject){
        // Your code goes here
        setTimeout(function f(){
            console.log("timer done");
            reject("10")
        },3000);
    });
}

async function consume(){ //Always return promise
    try{
        console.log("Inside function");
        const response=await createPromise();
        const response1=await createPromise();
        console.log("Response is", response);
    }catch(err){
        console.log("Handled", err)
    }
}
console.log(consume())


console.log("Start")
consume1(); 
console.log("End")

//FETCH API- IN CONSOLE TO DOWNLOAD THE DATA OF THE URL

fetch("url").then(function f(response){
    return response.json();
})
.then(function f(value){
    console.log(value);
})