function Product(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;
}

const p=new Product("Macbook", 150000,5);
console.log(p)

let x={
    p: Product
};

x.p("airpods", 20000,5);
console.log(x)