// HELLO WORLD in Nodejs

console.log("Shourya Shri")
console.log("Pappu"
+ " is my best friend")
//Arithmetic Operators 
let x =10;
let y=5;
console.log(x + y);
console.log(x - y)
console.log(x * y)
console.log(x / y)

//Assignment operators
x +=y ; console.log('+= : '+x)
x -=y ; console.log('-= :'+x)
x *=y ; console.log('*= :'+x)
x /=y ; console.log('/= :' +x)
x %=y ; console.log('%= :'+x)

//Comparison operators
console.log(x == y +  5 ? 'yes':'no')
console.log(x != y ? 'yes':'no')
console.log(x > y ? '       yes':'no')
console.log(x < y ? '        yes':'no')
console.log(x >= y ? '         yes':'no');
console.log(x <= y ? '          yes':'no');

//Logical operators AND OR NOT
console.log((true && true)? '     Yes':'No')
console.log((false || false )? '      Yes':'No')
console.log(!true ? 'Yes':'No')

//Typeof operator
console.log(typeof x)

//Ternary operator
let a =9;
a>5 ? console.log('Above 5'): (a<5) ? console.log('Below 5'): console.log('Equal to 5');    

//Loops
for(var i=0;i<=5;i++) {
    console.log('Looping...');
}
do{
    console.log('Do Looping..');
    break; //To stop the loop   
}while(true)    

let cnt =0;
while(cnt<3){
    console.log('While Looping....');
    cnt++;
}
/*How to give comments in  JavaScript:
1. Single line comment starts with /* and ends with *//* This is single line comment*/
//2. Multi-line comment starts with /*, spans across multiple lines and ends with */. Example:
/*This is multi-line
comment
in JS*/

//Syntax of Comments :
/* This is a simple comment */
// This is also a simple comment

//In JavaScript, there are two types of comments - Single Line Comments and Multiline Comments. The syntax for both types of comments/*
//In JavaScript, there are two types of comments - Single Line Comments and Multiline Comments. The syntax for both types of comments is as follows/*
//In JavaScript, there are two types of comments - Single Line Comments and Multiline Comments.*/

