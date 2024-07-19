const os=require('os');

console.log("CPU Architecture" + os.arch());

console.log("Free Memory :" + os.freemem())

console.log("Total memory :"+ os.totalmem())

console.log("Network interfaces "+ JSON.stringify(os.networkInterfaces()))

console.log("Os default temp dir: " + os.tmpdir())

console.log("Endianess"+ os.endianness())

console.log("Hostname: "+ os.hostname())

console.log("os type: "+ os.type())

console.log("OS Platform: "+ os.platform())

console.log("os release: " + os.release())