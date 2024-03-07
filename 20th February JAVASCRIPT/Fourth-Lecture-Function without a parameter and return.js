// One thing to note is that without parameters there won't be any existence of arguments.

function sayMessage(){
    console.log("I'm happy to learn Full Stack Web Development From PW Skills!")
}
sayMessage();
sayMessage()

function passMessage(){
    return "I'm extremely happy to learn Full Stack Web Development From PW Skills!"
}
let message=passMessage();
console.log(message);
let newMessage=message+". And I love coding in JavaScript.";
console.log(newMessage)