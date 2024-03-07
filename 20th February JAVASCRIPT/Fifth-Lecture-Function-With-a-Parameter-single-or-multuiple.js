// Function with Parameter

//Function Declaration

function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed)
}

displayMessage("I'm happy to learn Full Stack Web Development From PW Skills!")
displayMessage("I am enjoying journey of JavaScript.")

function displayMessage1(messageToBeDisplayed1="I'm a proud student of PW skills"){
    console.log(messageToBeDisplayed1);
}

displayMessage1()//Here as we have not passed argument, so it took the default value.
displayMessage1("I'm extremely happy to learn Full Stack Web Development From PW Skills!")

function add(x,y){
    return x+y;
}
console.log(add(5,7))

function add1(x,y=10){
    return x+y;
}
console.log(add1(5)) //Here, x will get 5, as it always assigns value from left to right. So  y is undefined here and hence gives NaN in output.Therefore, it is recommended that if you are giving default valures then always assign to all.

function Sumoftwo(num1, num2){
    return num1+num2
}

function Sumoftwo1([num1, num2]){
    return num1+num2
}
let result=Sumoftwo(3,4)
console.log(result)

let number=[10,40,30]
let result2=Sumoftwo1(number)
console.log(result2)