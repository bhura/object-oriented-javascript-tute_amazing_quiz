function Quiz (questionArray){
  this.questions = questionArray;
  this.score = 0;
  this.questionIndex = 0;
}
Quiz.prototype.guess =
function(choice){
  if(this.getNextQuestion().isCorrectGuess(choice)){
    this.score++;
  }
  this.questionIndex++;
};
Quiz.prototype.getNextQuestion = function(){
  return this.questions[this.questionIndex];
};
Quiz.prototype.hasEnded = function (){
  console.log(quiz.questions);
  return this.questionIndex >= this.questions.length;
};
