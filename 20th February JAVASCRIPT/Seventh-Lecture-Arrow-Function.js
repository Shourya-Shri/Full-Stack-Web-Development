// What is Arrow  Function?

// 1. One parameter, and a single return statement

const square=(x) => x*x;//if it is a single parameter then we can avoid parantheses that is(), we can simple write x=>x*x
console.log(square(5));

// 2. Multiple parameter, and a single return expression

const sumOftwoNumbers=(x,y)=>x+y;
console.log(sumOftwoNumbers(3,4));

// 3. Multiple statements in function expression

const sum=(x,y)=>{
    console.log('Adding ${x} and ${y}');
    return x+y;
};
let a=sum(6,9);
console.log(a);

// 4. Returning an object

const sumAndDifference=(x,y)=>({sum:x+y, difference:x-y});
console.log(sumAndDifference(8,7));