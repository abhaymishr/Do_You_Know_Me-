    var readLineSync=require("readline-sync")
    var chalk=require("chalk");
    
    
    var score=0;

    var userName=readLineSync.question("Enter Your Name ");
    console.log(chalk.redBright("Welcome "+userName+" Do You Know Abhay? "));


    function play(question,answer,options){

      console.log(question)
      console.log(options)
      var userAnswer=prompt(chalk.blueBright("Enter your Answer?"))
      
      
      
      if(userAnswer.toUpperCase()==answer.toUpperCase()){

    console.log(chalk.greenBright("You Are Right"));
    score=score+1

      }

      else{
        console.log(chalk.red("Wrong"));

      }

      console.log("Current Score"+score)
      console.log("-----------")
    }


    var questions=[{
      question:"Where Do I Live?",
      answer:"A",
      option:"A)Rishikesh B)DehraDun C)DELHI"
    },
    {
      question:"My favorite Super-Hero would be?",
      answer:"A",
      option :"A)SPIDERMAN B)BATMAN C)IRONMAN"
    },
    
    {
      question:"My Favorite Actor?",
      answer:"A",
      option :"A)SRK B)SALMAN C)TIGER"
    },

    {
      question:"My Favorite Singer?",
      answer:"a",
      option :"A)Arigit B)Kishore C)Kumar Sanu"
    },
    ]

    var scores = [
  {
    name:"Polo ",
    score:"3"
  },
  {
    name:"Atul ",
    score:"2"
  }
];



    for(var i=0;i<questions.length;i++){

    var currentQuestion=questions[i]
    play(currentQuestion.question,currentQuestion.answer,currentQuestion.option);
    }

    

    

    console.log("Your Final Score is:"+score)

    if(score>3){
      console.log(chalk.blue("You Scored highest"))
    }
    else{
      console.log("Highest Scores Are:")

      for(var i=0;i<scores.length;i++){

    var currentPlayer=scores[i]
    console.log(chalk.blue("Name:"+currentPlayer.name+"Score:"+currentPlayer.score));
    }

    }

