var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// User Questions //
let questions = [
    {
        type: "input",
        message: "What is your repository title?",
        name: "title"
    },{
        type: "input",
        message: "Please give your logo information.",
        name: "logo"
    },{
        type: "input",
        message: "GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Insert GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Describe the repository.",
        name: "description"

    },{
        type: "input",
        message: "Can others contribute?",
        name: "contribute"
    },{
        type: "input",
        message: "State any test(s) required.",
        name: "test"
    },{
        type: "input",
        message: "What are the project acomplishments.",
        name: "accomplish"
    },{
        type: "input",
        message: "Provide a screenshot.",
        name: "scriptjs" 
    },{
        type: "input",
        message: "What is the goal of this project?",
        name: "endgoal"
    }
];


// Function to write to my ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 