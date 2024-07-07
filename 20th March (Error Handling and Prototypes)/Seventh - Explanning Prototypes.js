// Prototypes are important in interviews.

let myHeros = ["thor","spiderman"]
let dcHeros = ["batman","flash","superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
    console.log('Hitesh is present in all objects');
}
console.log(myHeros.hitesh());
console.log(heropower.hitesh());

Array.prototype.heyHitesh=function(){
    console.log('Hitesh says hi');
}
console.log(myHeros.heyHitesh());
// console.log(heropower.heyHitesh()); //Error

const User={
    name: "top name",
    email: "top@gmail.com"
}
const Teacher={
    makeVideos: true
}
const TeachingSupport={
    isAvailable: false 
}
const TAAssistant={
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User //This technique is can also be used to assign properties of user to teacher.

Object.setPrototypeOf(TeachingSupport,Teacher) //This technique is used to assign properties of teachingSupport to teacher.

console.log(TAAssistant.isAvailable)

String.prototype.truelength=function(){
    console.log(`True length is ${this.trim().length}`)
}

"hitesh      ".truelength();
"anurag      ".truelength();

console.log()