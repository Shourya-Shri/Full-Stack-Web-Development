//What is an Array?

//=> An Array in JavaScript is a data structure that stores an ordered list of elements. It can hold elements of any data type, including numbers, strings, objects, and even other arrays. Arrays are a type of object in Javascript and have a number of built-in methods for adding, removing, and manipulating elements.

// Why do we need Arrays in JavaScript?

//=> a. Grouping related data b. Storing multiple values c. Accessing specific elements of the group d. Sorting and searching for- To store multiple values at once. 

let a= [1,2,3,4,"Shourya",false]

console.log(a)

let b=new Array();
console.log(b)

let c=new Array(5)
console.log(c)

let d=new Array("abc","def","ghi")
console.log(d)

/*
given array -> [11,21,31,41,51]
index of 31 -> 2
index  of "def" -> 1
index is 0 based.
*/

console.log(a[0]) // 1

console.log(a[4]) // Shourya

a[4]=5

console.log(a[4]) // 5

console.log(a[14]) // Undefined