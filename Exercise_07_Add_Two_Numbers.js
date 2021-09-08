var readlineSync=require('readline-sync');
function add(num1,num2){
  var sum=num1 + num2;
  return sum;
}
function sub(num1,num2){
  var sum=num1-num2;
  return sum;
}
function product(num1,num2){
  var sum=num1*num2;
  return sum;
}
var a=readlineSync.question("Enter the first number : ");
var b=readlineSync.question("Enter the second number : ");
a=Number(a);
b=Number(b);
console.log('\n\nThe addition of '+a+' & '+b+' is : '+add(a,b));
console.log('\n\nThe subtraction of '+a+' & '+b+' is : '+sub(a,b));
console.log('\n\nThe product of '+a+' & '+b+' is : '+product(a,b));