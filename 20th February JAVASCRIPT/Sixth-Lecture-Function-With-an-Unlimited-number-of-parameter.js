// Function with an unlimited number of parameters

function sumOfAllParameters(){
    let sum=0
    for(let i=0;i<arguments.length;i++) sum+=arguments[i];
    return sum;
}
let result=sumOfAllParameters(1,2,3,4,5,6,7,8)
console.log("The sum is: "+result);  // Outputs "The sum is: 36