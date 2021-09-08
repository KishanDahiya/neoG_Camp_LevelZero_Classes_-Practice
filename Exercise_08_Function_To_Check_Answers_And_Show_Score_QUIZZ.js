var readlineSync=require('readline-sync');
var score=0;
console.log("Welcome to Kishan Dahiya Quizz!!!\n")
function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    score=score+1;
    console.log("\nYou are Correct.\nYour score is "+score);
  }else{
    score=score-1;
    console.log("\nYou are Wrong :( \nYour score is "+score);
  }
}

play("\nWhat is Kishans surname ?\n","Dahiya");
play("\nHow old is Kishan ?\n","22")

console.log("\n\nGame Over!!!\nYour Score is "+score)
