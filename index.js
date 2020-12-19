const chalk = require('chalk');
var readlineSync=require("readline-sync");

var score=0;
var userName=readlineSync.question("Please enter your name: ");

var highscores=[{name:"Rushabh",points:5},{name:"Daulat",points:4}]
 


console.log(chalk.blue("Hello, "+userName+"\n"+"How well you know Parimal?"));


//start
function play(question,answer){

  var userAnswer=readlineSync.question("\n"+chalk.magentaBright(question));


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
  {
    question:"what topping do i hate on my pizza? ",
    answer:"corn"
  }
  
  
  ]

  for(i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
  }
  console.log("\n"+"your total score: "+score);
  if(score>=4){console.log(chalk.green("\n"+"Congrats! you made it to the leaderboard!") )}

  if(score===5){
    highscores[2]=highscores[1];
    highscores[1]=highscores[0]
    highscores[0]={name:userName,points:score}
    console.log(highscores);
  }

  if(score==4){
    highscores[2]={name:userName,points:score}
     console.log(highscores);
  }
  
  