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
    getRating(){ //getter method
        console.log(this.#rating)
    }
    setRating(r){ //setter method
        if(r<0) return;
        this.#rating = r;
    }
    get ratingGetter(){ //getter method
        console.log(this.#rating)
    }
    set ratingSetter(r){ //setter method
        if(r<0) return;
        this.#rating = r;
    }
    display(){ //only claa method can access the private data member.
        console.log("Displaying the current product",this.name,this.price,this.#rating);
    }
}

const p=new Product("iphone",1000,5); 
console.log(p)
//p.setRating(10);
//p.getRating();

p.ratingSetter=20;
p.ratingGetter;
