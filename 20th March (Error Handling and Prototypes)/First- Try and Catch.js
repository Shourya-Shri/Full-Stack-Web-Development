/*try{
    let x=undefined;
    console.log(x[0]);
}catch{
    console.log("Error handling in catch");
}finally{
    console.log("Finally gets executed")
}

console.log("End")*/

try{
    let x=undefined;
    console.log(x[0]);
}catch(err){
    console.log("Error handling in catch", err);
}finally{
    console.log("Finally gets executed")
}

console.log("End")