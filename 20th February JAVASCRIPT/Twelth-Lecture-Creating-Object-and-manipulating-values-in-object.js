//Creating objects and Manipulaing values in Object.

let obj={id:101, name:"Alex",salary: 10000}//key:value pair
console.log(obj)

let emp=new Object()
console.log(emp)
emp.id=102
emp.name="Shourya"
console.log(emp)

function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const e=new Emp(103,"Sahaj",5000);
console.log(e)

console.log(emp.id)
console.log(emp["name"])//access using [] instead of

emp.salary=13000
console.log(emp)
emp.id=13 //updation
console.log(emp)

delete emp.id //deletion
console.log(emp)