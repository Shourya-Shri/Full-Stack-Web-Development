// Arrow function- The limitation of arrow function is this that you can use this as constructer.

function Product = (n,p,r) => {
    this.name=n;
    this.price=p;
    this.rating=r;
}

const p= new Product("iphone", 10000,5);
console.log(p);

// The theory of this keyword pointing to calling context is not applicable with arrow function.

// below is example

let obj = {
    x: 10,
    fun(){
        console.log(this.x)  
    }
}

obj.fun(); // Output-> 10

let obj1 = {
    x: 10,
    fun: () => {
        console.log(this.x)  
    }
}

obj1.fun(); // not executed because of arrow function


let obj2 = {
    x: 10,
    fun(){
        y={
            gun:() =>{
                console.log(this.x);
            }
        }
        y.gun()
    }
}

obj2.fun();