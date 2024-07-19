const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/about'){
        res.write('<h1>Hello, Node.js: About Section</h1>');
    }
    res.end();
})

server.listen(5001);

console.log('The http server is running on port 5001')