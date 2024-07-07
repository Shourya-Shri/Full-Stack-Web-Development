// First Class Function?
// A function is considered a first class object in JavaScript if it can be assigned to a variable, passed as an argument to another function and returned from.

const powerTwo = (n)=>{
    return  n ** 2;
}
function powerCube(powerTwo,n){
    return powerTwo(n)*n;
}
/* 
function powerCube(powerTwo,n){
    return (n)=>{
    return  n ** 2
    }*n
}
*/
console.log(powerCube(powerTwo,3))

function sayHello(){
    return ()=>{
        console.log("Hello Hitesh")
    }
}
let guessValue=sayHello()
console.log(guessValue);
guessValue();

const higherOrder=n=>{
    const oneFun=m=>{
        const twoFun=p=>{ 
            return m+n+p
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(2)(3)(4))

const myNums=[2,3,4,5]

/*const sumArray=arr=>{
    let total=0
    arr.array.forEach(element=>{

    });
}*/
const sumArray=arr=>{
    let total=0
    arr.forEach(function(element){
        total+=element
    });
    return total
}
console.log(sumArray(myNums));

function oneMoreHello(){
    console.log("Hello Hitesh !", Math.random())
}
setInterval(oneMoreHello,1000)//For every-second you execute this msg.

setTimeout(oneMoreHello,2000) //Print-after 2 seconds