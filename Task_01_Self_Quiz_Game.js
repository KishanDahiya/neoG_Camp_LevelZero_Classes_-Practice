const readlineSync= require('readline-sync');
const chalk = require('chalk');
var score=0;
var username=readlineSync.question(chalk.hex('#70CED0').bold("What is your name?\n"))
console.log(chalk.hex('#25B396')('\nHey '+username+' Welcome To Quiz About Kishan!!!\n\n------How well do you know Kishan???------'))
console.log(chalk.hex('#FE4567').bold("\nAnswer only in the option numbers\nEx : 1 or 3 or 2 or 4\n"))


//Storing the current Highscores 
var kishan={
  name:"Kishan",
  score:10
}
var saurabh={
  name:"Saurabh",
  score:09
}

//defining the highscore array with objects
var highscores=[kishan,saurabh];

//All 10 Questions are listed below
var question1={
  question:"\nQ1.What is Kishans surname?\n1.Gupta\n2.Batra\n3.Sharma\n4.Dahiya\n",
  answer:4
}
var question2={
  question:"\nQ2.What is his BirthDate(DDMMYY)\n1.150698\n2.150699\n3.140699\n4.150599\n",
  answer:2
}
var question3={
  question:"\nQ3.Which of the following would Kishan Pick as of now?\n1.Money\n2.Friendship\n3.Skills\n4.Freedom\n",
  answer:1
}
var question4={
  question:"\nQ4.How old is Kishan?\n1.9\n2.23\n3.22\n4.21\n",
  answer:3
}
var question5={
  question:"\nQ5.Which is Kishans favourite Kpop Girl Group?\n1.TWICE\n2.ITZY\n3.LOOONA\n4.Oli London\n",
  answer:1
}
var question6={
  question:"\nQ6.Where was Kishan born?\n1.Akola\n2.Ankola\n3.Mars\n4.Hospital\n",
  answer:2
}
var question7={
  question:"\nQ7.Who is Kishans Favourite Female Rapper?\n1.Onika Tanya Maraj\n2.Mamta Banarjee\n3.Nicki Montana\n4.J.Y.P\n",
  answer:1
}
var question8={
  question:"\nQ8.How old was Kishan when he first began dancing?\n1.2\n2.3\n3.He doesn't dance\n4.60\n",
  answer:3
}
var question9={
  question:"\nQ9.Who does Kishan love most?\n1.Aliens\n2.Himself\n3.Dal Dhokli\n4.He? He Loves?\n",
  answer:2
}
var question10={
  question:"\nQ10.Kishan once drank a lot of Keroscene because its blue and water in Cartoon is blue?\n1.True\n2.False\n",
  answer:1
}
var question11={
  question:"\nQ11.Which of the following animal Kishan didn't get bitten by?\n1.Chimpanzee\n2.Monkey\n3.Rat\n4.Dog\n",
  answer:1
}
var question12={
  question:"\nQ12.How much does Kishan Weight?\n1.123kg\n2.88kg\n3.72kg\n4.81kg\n",
  answer:4
}
var question13={
  question:"\nQ13.What was the first music video Kishan saw of Nicki Minaj?\n1.Your Love\n2.Anaconda\n3.Va Va Voom Voom\n4.Switch to me\n",
  answer:3
}
var question14={
  question:"\nQ14.Is Kishan Married?\n1.No\n2.Yes\n",
  answer:1
}
var question15={
  question:"\nQ15.Is Kishan Indian?\n1.Yes\n2.No\n",
  answer:1
}

//Array with all questions
var questions=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15]

//Loop to display question and check answers, updating score.
for(var i=0;i<questions.length;i++){
  current=questions[i];
  console.log(chalk.hex('#005DFF ').bold(current.question))
  var userAnswer=readlineSync.question(chalk.hex('#FFE33F').bold("Answer : "));
  if(userAnswer==current.answer){
    score=score+1;
    console.log(chalk.hex('#00FF08 ').bold('\nCorrect Answer !!!\nYour score is : '+score));
    }else{
      console.log(chalk.hex('#FF0000').bold('\nSorry Wrong Answer :( \nYour score is : '+score));
      }
  }

var total=questions.length;

//Ending message to the player.
console.log(chalk.hex('#FF0000').bold('\n\nGame Over !!!\nYour score is : '+score+'/'+total));

//Calculating HighScore ,if broken a record asking to send a screenshot to update the LeaderBoard

for(var i=0;i<highscores.length;i++){
  currentHscore=highscores[i];
  if(score>currentHscore.score){
    console.log(chalk.hex('#FE4567').bold("\nYou Broke one of the TOP SCORE!!!\nSend A screenshot to Kishan to update the LeaderBoard\n"))
    break
    }
}

//Displaying the highscore list
console.log(chalk.hex('#2EFE20').bold("\n-------Leaderboard-------"))
for(var i=0;i<highscores.length;i++){
  currentHscore=highscores[i];
  console.log(chalk.hex('#FFBF00').bold(currentHscore.name+" : "+currentHscore.score))
}
