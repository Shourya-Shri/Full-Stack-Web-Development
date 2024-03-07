let arr=[1,2,3,4,5];

arr.push(6); //add element to the end of array 
console.log("After Push: "+arr)

arr.push(7,8)
console.log("After Multiple push :"+arr)

let b=arr.pop( ) ;//remove last element from array
console.log("After Pop : "+arr)
console.log("Element Removed is : "+b)

let a=arr.shift() ;// remove first element from array
console.log("After Shift : "+arr)
console.log("First Element Removed is : "+a)

arr.unshift(9) ;// add an element at beginning of array
console.log("After UnShift : ",arr)

let a1=[1,2,3,4,5]
let a2=[3,4,5]

let a3=a1.concat(a2) ;// combine two arrays
console.log("Array after concatination : ",a3)

let s=a3.join("") ;// convert all elements into string
console.log("Elements Joined with - :",a3)
console.log(s)

let w=a3.join("@") ;
console.log("Elements joined with @ : ",w)

a3.reverse( ); // reverse the order of array elements
console.log(a3)

console.log(a3.indexOf(4)) ;// return position of given element in array
                            // if not found it returns -1

console.log(a3.lastIndexOf(4)); //return the last occurrence of the specified element
                                //if not found it returns -1
let arr1 = [1,2,3,4,5,6]
console.log(arr1.slice(0,3))   ;//returns elements from index 0 to  3 (not include 3)
console.log(arr1.slice(-3))    ;// returns elements from end with length 3

arr1.splice(2,0,11) //0 means without deleteing current element and 1 means by deleting current element
console.log(arr1)

arr1.splice(1,2);     //delete 2 elements starting from index 1
console.log(arr1)

arr1.splice(2,0,34,35,36) //adding multiple elements
console.log(arr1)