let emp={
    id:101,
    name:"Shourya",
    age: 21
}

let keys=Object.keys(emp); // returns an array of all the property names (in order) in the object
console.log("Keys : ",keys);
let values=Object.values(emp);//returns an array of all the property values in the same order as that of corresponding properties// ["id","name","age"]
console.log(values)
console.log(emp)
const entries=Object.entries(emp);//returns an array of arrays each containing a key-value pair. The object must not//returns an array of the values corresponding to each
console.log(entries)

//To stop updation of new key,value pair

Object.freeze(emp)

//To update the existing key,value pair
Object.seal(emp)

let o=Object.assign({},emp) //to copy
console.log(o)

let c=Object.assign({x:16},emp) //To copy and add also from user side
console.log(c)