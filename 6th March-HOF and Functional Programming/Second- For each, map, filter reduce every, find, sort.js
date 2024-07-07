let arr=[2,3,4]

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})

arr.forEach((element, index,arr)=>{
    console.log("Arrow based function:",index,element,arr);
})

const heros=["nagraj","doga","dhruva","maniraj"]


heros.forEach((el)=>{console.log(el.toUpperCase())})

arr.map(function(element,index,arr){
    console.log(element,index,arr);
})

heros.map((h)=>console.log(h.toUpperCase()))

//filter
console.log(heros);
const herosWithRaj= heros.filter((h)=> {
    return h.endsWith('raj')
})
console.log(herosWithRaj);

//shopping cart

const cartBill = [20,30,50]

const sumOfCartBill = cartBill.reduce((prev,curr) => prev+curr,0)

console.log(sumOfCartBill)

//gaming

const gamescore=[200,300,310,250,150]
console.log(typeof gamescore[1])
//check if all values are numbers

const gameScorecheck =gamescore.every((v)=> typeof v === 'number') //checking data type

console.log("check:", gameScorecheck)

//find score above 200

const above200=gamescore.find((score)=> score > 200)

console.log(above200)