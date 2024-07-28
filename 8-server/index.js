const http=require('http');// getting the http module

const PORT=3032; //Initializing the port no.
const HOSTNAME='localhost'; //define the hostname

const server=http.createServer((req,res)=>{ // create server

    //Home page
    //About page
    //Contact page
    // product page
    // Rest... > Error
    if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to Node JS server created by Shourta Shri!');

    }else if(req.url=='/about'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('About Page!');
    }else if(req.url =='/contact'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Contact Page!');
    }else if(req.url=='/product'){

        const options={
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        //Below is-> will be used for server to server request
        const apiReq=http.request(options,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode=200; // set to 200 to indicate it is successful and 500 for unsuccessful
                res.setHeader('Content-Type','application/json'); // set content type to plain text
                res.end(data.toString()) // End with '' text return
            })
        });
        
        apiReq.on("error",()=>{
            console.log(e);
        });
        
        apiReq.end();

    }else{
        res.statusCode=500;
        res.setHeader('Content-Type','text/plain');
        res.end('Error');
    }

});

server.listen(PORT,() =>{ // list to the define port.
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})