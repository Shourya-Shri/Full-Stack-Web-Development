// Static method is a class property and can't be called with objects.

class Product{
    
    #rating; //private data member
    constructor(n,p,r){
        console.log("calling the constructor")
        this.name=n;
        this.price=p;
        this.#rating=r;
    }
    static custom(){
        console.log("Calling a static method");
    }
    display(){
        console.log("This refers to", this)
        console.log("Displaying the current product",this.name,this.price,this.#rating);
    }
}

const p=new Product("iphone",1000,5); 
console.log(p)
console.log(p.name)
p.name= "GOOGLE" //As, it can be changed so it is a security concern. Thus have to make it private.
p.display();
Product.custom();
