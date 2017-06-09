function Question (question1, choice, answer){
  this.question1 = question1;
  this.choice1 = choice;
  this.answer = answer;
}
 Question.prototype.isCorrectGuess = function (guess){

   return this.answer === guess;
 } ;
