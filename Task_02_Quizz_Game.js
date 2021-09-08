const readlineSync= require('readline-sync');
const chalk = require('chalk');
var score=0;
var username=readlineSync.question(chalk.hex('#70CED0').bold("What is your name?\n"))
console.log(chalk.hex('#25B396')('\nHey '+username+' Welcome To Quiz About TWICE!!!\n\n------How well do you know TWICE???------'))
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
  question:"\nQ1.Twice has how many members?\n1.5\n2.9\n3.8\n4.7\n",
  answer:2
}
var question2={
  question:"\nQ2.Which member of Twice was born in Tainan, Taiwan\n1.Nayeon\n2.Jeongyeon\n3.Tzuyu\n4.Dahyun\n",
  answer:3
}
var question3={
  question:"\nQ3.Which of the following is NOT a member of Twice\n1.Sana\n2.Mina\n3.Momo\n4.Pippin\n",
  answer:4
}
var question4={
  question:"\nQ4.What was the name of Twice's debut EP?\n1.What's Twice?\n2.The Story Begins\n3.Once, Twice, Three Times a Lady\n4.Fools Paradise(Twice The Admission Price)\n",
  answer:2
}
var question5={
  question:"\nQ5.Who is the oldest member of Twice?\n1.Nayeon\n2.Chaeyoung\n3.Kevin\n4.Jihyo\n",
  answer:1
}
var question6={
  question:"\nQ6.What was the name of the reality TV show created to find the members of Twice?\n1.The X Factor\n2.Sixteen\n3.The Search\n4.Hunt For The K-Poppets\n",
  answer:2
}
var question7={
  question:"\nQ7.Which member of twice is the younger sister of actress Gong Seung-yeon?\n1.Dahyun\n2.Mina\n3.Tzuyu\n4.Jeongyeon\n",
  answer:4
}
var question8={
  question:"\nQ8.How old was Momo when she first began dancing?\n1.2\n2.3\n3.4\n4.6\n",
  answer:2
}
var question9={
  question:"\nQ9.Which member of Twice was born in San Antonio, Texas?\n1.Jihyo\n2.Sana\n3.Mina\n4.Uncle Albert\n",
  answer:3
}
var question10={
  question:"\nQ10.Twice once sung thrice for Katie Price on a stage of dice and dry ice. True or false?\n1.True\n2.False\n",
  answer:2
}
var question11={
  question:"\nQ11.What is Jihyo's favorite number?\n1.45\n2.12\n3.21\n4.20\n",
  answer:3
}
var question12={
  question:"\nQ12.When Momo passed the audition?\n1.April 13, 2012\n2.March 22, 2013\n3.December 2, 2012\n4.February 18, 2013\n",
  answer:1
}
var question13={
  question:"\nQ13.What is the order of the songs on 'The Story Begins' album?\n1.Like ooh ahh, Do it again, Going crazy, Truth, Like a fool, Candy boy\n2.Like ooh ahh, Do it again, Going crazy, Truth, Candy boy, Like a fool\n3.Like ooh ahh, Do it again, Truth, Going crazy, Like a fool, Candy boy\n4.Like ooh ahh, Going crazy, Truth, Do it again, Candy boy, Like a fool\n",
  answer:2
}
var question14={
  question:"\nQ14.When did the 'Twicecoaster: Lane 1' album appearance?\n1.November 14, 2016\n2.October 14, 2016\n3.October 24, 2016\n4.November 24, 2016\n",
  answer:3
}
var question15={
  question:"\nQ15.Who wrote their song 'Eye, eye, eyes'?\n1.Momo and Dahyun\n2.Jihyo and Chaeyoung\n3.Jeongyeon and Chaeyoung\n4.Nayeon and Jihyo\n",
  answer:2
}

//Array with all questions
var questions=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15]

//Function to display question and check answers, updating score.
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
var total=questions.length

//Ending message to the player.
console.log(chalk.hex('#FF0000').bold('\n\nGame Over !!!\nYour score is : '+score+'/'+total));

//Calculating HighScore ,if broken a record asking to send a screenshot to update the LeaderBoard

for(var i=0;i<highscores.length;i++){
  currentHscore=highscores[i];
  if(score>=currentHscore.score){
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
