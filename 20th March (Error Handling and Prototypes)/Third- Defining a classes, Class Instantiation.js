// What are classes and objects?

class Product{
    // properties -> variable -> data member
    name;
    price;
    rating;

    // behaviours -> functions -> member functions
    display(){
        console.log("Product is displayed");
    }
}

const p=new Product();
console.log(p);

p.display();