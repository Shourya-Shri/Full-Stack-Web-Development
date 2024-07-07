let score=4

function one(){
    let score=0
    console.log(score);
}
function two(){
    let score=3
    console.log(score);
}
function three(){
    console.log(score); // It will check in global/outer scope, that is 4.
}

/*

one()  //0
two() //3
three()//4
console.log(score);//4

*/

function outerFunc(){
    let outerVar ='I am at scope level 1'
    function innerFunc(){
        let innerval="I am at scope level 2"
        console.log(outerVar) // Inner fuction has access to outer function.
    }
    // console.log(innerVal) //will give error as outer function does not have access to inner function.
    innerFunc()
}

//outerFunc()//

// All these are under lexical scoping

const myGlobalValue=0

function func(){
    const val1=1;
    console.log(myGlobalValue);

    function innerofFunc(){
        const val2=2;
        console.log(val2, val1, myGlobalValue);

        function innerofInnerfunc(){
            const val3=3;
            console.log(val3, val2, val1,myGlobalValue);
        }
        innerofInnerfunc()
    }
    innerofFunc()
}
// func()

// Closure - Means the function can access the outer function and can remember this.

function superFunc(){
    let outerValue= 'I am outer'
    function minorFunc(){
        console.log(outerValue)
    }
    minorFunc()
}
// superFunc()

const errormessage= "File not found"

setTimeout(function callback(){
    console.log(errormessage);
},1000)

let pageCount=0
const items=[2,4,5,7,8]

items.forEach(function iterator(num){
    pageCount++
    console.log(num);
})

console.log("Page Count", pageCount);