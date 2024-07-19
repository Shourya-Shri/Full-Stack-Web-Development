const fs=require('fs');

console.log('Read Start')
// Asynchronus way to read file
/*fs.readFile('4-fs/input.txt', function(err,data){
    if(err){
        console.log('Error:',err);
        return err;
    }
    console.log('Data',data.toString());
    console.log('Read End')
    return data;
});

console.log('Other Stuff')
*/
// Synchronus way to read file
/*
var data = fs.readFileSync('4-fs/input.txt')

console.log('Data: ', data.toString());
console.log('Read End')
console.log('Other Stuff');

//Above were the high level API.
*/

const buf=new Buffer(1024); // Place to store data.
fs.open('4-fs/input.txt','r+',function(err,fd){
    if(err){
        console.log('Error in opening file:', err);
    }
    console.log("File open successfully!")

    fs.read(fd,buf,0,buf.length,0,function(er,bytes){
        if(er){
            console.log('Error in reading file!');
        }
        console.log('Data',bytes);
        console.log('Data',buf.slice(0,bytes).toString())
        fs.close(fd,function(err){
            if(err){
                console.log('Error in closing file:');
            }else{
                console.log('Success in closing file')
            }
        })
    })
})



// Below writing to file
fs.writeFile('./4-fs/input.txt', 'CHANDIGARH UNIVERSITY', function(err){
    if(err){
        console.log('Error in writing file!');
    }else{
        console.log('File written successfully!');
    }
});

// Below append to file

fs.appendFile('4-fs/input.txt','--Shourya Shri','utf8',function(err){
    if(err){
        console.log('Error in appending file!');
    }else{
        console.log('File appended successfully!');
    }
})

//Deleting the file

fs.unlink('4-fs/input.txt', function(err){
    if(err){
        console.log('Error in deletion')
    }else{
        console.log('Success in deleting file!')
    }
})