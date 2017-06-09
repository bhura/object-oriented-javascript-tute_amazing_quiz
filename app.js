
var question1 = new Question("What is value of PI?", [4, 3.14], 3.14);
var question2 = new Question("What is australia?", ['continent', 'country'], 'continent');
var questionArray = [question1, question2];
var quiz = new Quiz(questionArray);
//quiz.questions.push(question1);
//quiz.questions.push(question2);
//console.log(question1);
QUizUi.displayNext();
