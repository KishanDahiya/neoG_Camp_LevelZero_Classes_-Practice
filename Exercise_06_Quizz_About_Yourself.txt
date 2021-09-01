var readlineSync= require('readline-sync');
var score=0;
console.log('Welcome To Quizz About Kishan!!!\n\n\n')
var userAnswerAge=readlineSync.question('How old is Kishan?\n');
if(userAnswerAge==22){
  score=score+1;
  console.log('Correct Answer !!!\nYour score is : '+score);
}else{
  score=score-1;
  console.log('Sorry Wrong Answer :(\nYour score is : '+score);
}
var userAnswerFavouriteGroup=readlineSync.question('Which is Kishans Favourite Kpop Girl Group?\n');
if(userAnswerFavouriteGroup==='twice'){
  score=score+1;
  console.log('Correct Answer !!!\nYour score is : '+score);
}else{
  score=score-1;
  console.log('Sorry Wrong Answer :(\nYour score is : '+score);
}
var userAnswerBirthday=readlineSync.question('What is Kishans Birthday(DDMMYY)?\n');
if(userAnswerBirthday==150699){
  score=score+1;
  console.log('Correct Answer !!!\nYour score is : '+score);
}else{
  score=score-1;
  console.log('Sorry Wrong Answer :(\nYour score is : '+score);
}
console.log('\n\n\nGame Over !!!\nYour score is : '+score)
