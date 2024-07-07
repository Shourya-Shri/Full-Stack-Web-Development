let arr=[1,2,3,4]
console.log(typeof arr) //in js everything is almost object.

const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

// const threeArray =  oneArray.concat(twoArray)
// const threeArray=[oneArray, twoArray]

const threeArray = [...oneArray, ...twoArray] //spread Operator

// console.log(threeArray)

// ...oneArray=1,2,3,4
// ..twoArray=5,6,7,8

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// REST operator

function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

function manyArgumentv2(...args){ //because it is spread
    console.log(typeof args);
    let finalArr= args.map(e=>e)
    console.log(finalArr)
}
manyArguments(1,2,3)
manyArgumentv2(1,2,3,4,5,6,7)

// +++++++++++++++++++++++++++++++

const names = ["superman","flash"]
const newNames =["batman", ...names, "thor"]

console.log(newNames)

const sitename ="pwskills"
console.log([...sitename]) // spread operator

function pwSkills(...values){
    return values
}

console.log(pwSkills("superman","flash"))