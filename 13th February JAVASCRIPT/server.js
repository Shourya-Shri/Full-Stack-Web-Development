// Hello World in Node.js

console.log("SHOURYA SHRI");
console.log(this)  //Very important, in windows browser-it will show something different but in node js, it is different.

// values and Datatypes

// - primitive Data Types(Old types)

//- number: 2,3,4,4.5,98
//- String:  "Hello", 'World'
//- boolean : true , false(lowercase)
//- null    : represents a value that is assigned intentionally to indicate the absence of any object value or data.
// undefined

let a; //undefined

// Non Primitive Data Types
//- Array

let name1="Shourya";
let name2="Sahaj"
let name3="Anmol"
let name4="pappu"
let names=[name1,name2,name3,name4];
let names2=["Shourya","Sahaj","Anmol","Pappu",2,3,false,null,"Hello"];
console.log(names);
console.log(names2);
// 2 master js, you need to master 2 thingsnthat is object and Browser events

//- Object: {}
// let and const.............var is outdated, always use let. In var there are many scope problems.
const myName="Shourya"
let abc="Pappu"
let myname2="Pappu" //it won't change
console.log(myName)
console.log(myname2)
myname2="Sahaj"
console.log(myname2)

// Assignment Operator

let highScore=300
console.log(highScore)

let pwSkillsCoursePrice=3500
console.log(pwSkillsCoursePrice)

let course=200

let gst=36/100 * course;

let totalAmount =course + gst ;
console.log("Total Amount : " +totalAmount )

let pwDsaCourse=500
let gst2=36
console.log("Final price of DSA course:", pwDsaCourse+gst2);
console.log("Final price of DSA course:", pwDsaCourse-gst2);
console.log("Final price of DSA course:", pwDsaCourse*gst2);
console.log("Final price of DSA course:", pwDsaCourse/gst2);

console.log("Mod function", 5 %2)
console.log("Division",5/2)
console.log("Power function", 3**2)

//Comparison

let hiteshHighScore=200
let rajuHighScore=300
let hiteshHighScore1=300
let rajuHighScore1="300"

console.log(hiteshHighScore==rajuHighScore)
console.log(hiteshHighScore!=rajuHighScore)
console.log(hiteshHighScore<=rajuHighScore)
console.log(hiteshHighScore1==rajuHighScore1)
console.log(hiteshHighScore1===rajuHighScore1)//here, it is also checking the type

let value1=true
let value2=true
let value3=true
let value4=false

console.log(value1 && value2)

console.log(value3 || value4)