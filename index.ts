#! /usr/bin/env node

import inquirer from "inquirer";

//Declare a constant 'answer'

let answer: {
    sentences: string 
}=await inquirer.prompt([{

    name: "sentences",
    type: "input",
    message: "Enter your sentence to count words: "
}])

let words =answer.sentences.trim().split(" ");
console.log(words)

console.log(`Your sentence word counter is ${words.length}`);