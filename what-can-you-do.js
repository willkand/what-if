const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Hello. Enter your age: "));

if (num1 > 16){
    console.log("You can't drive. ")
};