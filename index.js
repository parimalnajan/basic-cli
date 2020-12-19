const chalk = require('chalk');
var readlineSync=require("readline-sync");

var score=0;
var userName=readlineSync.question("Please enter your name: ");

console.log(chalk.blue("Hello, "+userName+"\n"+"How well you know Parimal?"));
console.log(chalk.red("enter answers without spaet"));

//start
function play(question,answer){

  var userAnswer=readlineSync.question(question);


  if(userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log(chalk.green("Correct!"));
  score=score+1;
  
  } else {
    console.log(chalk.red("wrong."));
    }
    console.log(chalk.gray("Current score: "+score));

}

var questions=[{
  question:"What city do i live in? :",
  answer:"pune"
},
  {
    question:"my favourite videogame? ",
    answer:"dota"
  },
  {
    question:"do i love winter or summer ? ",
    answer:"winTer"
  },
  {  
    question:"Marvel Fan or DC? ",
    answer:"marvel"
  },
  
  
  ]

  for(i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
  }
  console.log("your total score: "+score);