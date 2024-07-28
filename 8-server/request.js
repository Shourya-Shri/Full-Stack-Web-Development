const http=require('http');


const options={
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}
//Below is-> will be used for server to server request
const apiReq=http.request(options,(apiRes)=>{
    apiRes.on("data",(data)=>{
        console.log(data.toString());
    })
})

apiReq.on("error",()=>{
    console.log(e);
});

apiReq.end();