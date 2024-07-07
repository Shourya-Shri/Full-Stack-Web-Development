let emptySet = new Set()

console.log(emptySet.size)

// Set stores unique value

let myArray = [1,2,3,4]

let newSet =new Set(myArray)
console.log(newSet)

let myArray1 = [1,2,3,4,3,2,1]

let newSet1 =new Set([...myArray1])
console.log(newSet1)

newSet.add(9)
console.log(newSet)
console.log(newSet.has(4))

newSet.clear()
console.log(newSet)

// Set difference

function setDifference(setA, setB){
    return new Set([...setA].filter(el=> !setB.has(el)))
}
// +++++++++++++++++++++

// map- Key value pair.

let map=new Map()

console.log(map.size)

let arr=[
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"]
]

arr.map((arrayItem)=>map.set(arrayItem[0],arrayItem[1]))
console.log(map)