class Product{
    // properties -> variable -> data memeber
    /*name;
    price;
    rating;*/

    constructor(n,p,r){
        console.log("calling the constructor")
        this.name=n;
        this.price=p;
        this.rating=r;

        // return 10; If you're returning primitive then it will be avoided in constructor.

        // return {x:10,y:20} //If you return non primitive then it will be returned.
    }
    // behaviours -> functions -> member functions
    display(){
        console.log("This refers to", this)
        console.log("Displaying the current product",this.name,this.price,this.rating);
    }
}

const p=new Product("iphone",1000,5); // new create an empty plane object.
// In the process of creating, constructor is always called.
console.log(p);
//p.display();