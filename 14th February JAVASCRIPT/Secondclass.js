// Mocha -> LiveScript -> JavaScript

//Node js is an open source, cross platform JavaScript runtime environment.

// Variables and values(Number, String, Boolean etc)
//==> Already studied.

// Operators

//Conditional and Loops

let age=19;

if(age>=18){
    console.log("You are allowed to vote")
}
else{
    console.log("you are not allowed to vote")
}

let signal="red"
if(signal=="red"){
    console.log("Red => Stop")
}else if(signal=="Yellow"){
    console.log("Go Slow, it's yellow")
}else{
    console.log("Green=> Go FAST")
}

//switch case statement

let user="Admin"
switch(user){
    case "Admin":
        console.log("He is Admin");
        break;
    case "Student":
        console.log("He is a Student");
        break;
    case "Mentor":
        console.log("He is Mentor")
        break;
    default:
        console.log("User Not Found")
}

// Loops
// do while, while, for

for(let i=0;i<5;i++){
    console.log(i);
}

//while(init, Condition, inc/dec)

let i=0;
while(i<5){
    console.log(i);
    i++
}
let a=0
do{
    console.log("Hello World")
    a++
}while(a<5)

//Ternary Op / Ternary Condition

isloggedin=true;// loosely typed, let is written but still it is working
isloggedin ? console.log("Home Page"): console.log("Login Page")