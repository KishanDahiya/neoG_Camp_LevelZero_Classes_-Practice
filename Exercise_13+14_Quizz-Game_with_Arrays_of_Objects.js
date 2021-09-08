var readlineSync= require('readline-sync');
var score=0;
var username=readlineSync.question("What is your name?\n")
console.log('\nHey '+username+' Welcome To Quiz About Kishan!!!')

var questionOne={
  question:"\nHow old is Kishan?\n",
  answer:22
}
var questionTwo={
  question:"\nWhich is Kishans Favourite Kpop Girl Group?\n",
  answer:"twice"
}
var questionThree={
  question:"\nWhat is Kishans Birthday(DDMMYY)?\n",
  answer:150699
}
var questions=[questionOne,questionTwo,questionThree]

for(var i=0;i<questions.length;i++)
{
  current=questions[i];
  var userAnswer=readlineSync.question(current.question);
  if(userAnswer==current.answer){
    score=score+1;
    console.log('Correct Answer !!!\nYour score is : '+score);
    }else{
      console.log('Sorry Wrong Answer :(\nYour score is : '+score);
      }
}
var total=questions.length

console.log('\n\n\nGame Over !!!\nYour score is : '+score+'/'+total);
