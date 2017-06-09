var QUizUi = {
  displayNext: function (){

      if(quiz.hasEnded()){
          this.displayScore();
      }else {
          this.displayQuestions();
          this.displayChoices();
          this.displayProgress();
      }
  },
  displayQuestions: function(){

    this.populateWithHtml('question', quiz.getNextQuestion().question1);
  },
  displayScore: function(){
    var gameOver = "<h2>Game Over</h2>";
    gameOver += '<h3> Your score is: '+quiz.score;
    this.populateWithHtml('quiz', gameOver)
  },
  displayChoices: function(){
    this.populateWithHtml('choice0', quiz.getNextQuestion().choice1[0]);
    this.guessHandler('guess0',  quiz.getNextQuestion().choice1[0]);
    this.populateWithHtml('choice1', quiz.getNextQuestion().choice1[1]);
    this.guessHandler('guess1',  quiz.getNextQuestion().choice1[1]);
  },
  guessHandler: function(id, choice){
    document.getElementById(id).onclick = function() {

      quiz.guess(choice);
      QUizUi.displayNext();
    }
  },
  displayProgress: function(){
    var progress = 'Question' + quiz.questionIndex + 'of' + quiz.questions.length;
    this.populateWithHtml('progress', progress);
  },
  populateWithHtml: function(question, html){

    document.getElementById(question).innerHTML = html;
  }
}
