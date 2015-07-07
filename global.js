var question1 = {
  question: "A magical jar of jelly beans doubles the number of jelly beans every minute.  The jar is full at noon.  When is it half full?",
  answer: "11:59",
  possibleAnswers: ["11:59", "11:30", "It is impossible to answer this question.", "12:01"]
};

var questions = [question1];
var score = 0;

for (i = 0; i < questions.length; i++){
  
  var directions = "Enter the number corresponding to your answer.";

  var wholeQuestion = directions + "\n\n" + questions[i].question + "\n";

  for (count = 0; count < questions[i].possibleAnswers.length; count++ ){
    wholeQuestion += "\n " + (count + 1) + ". " + questions[i].possibleAnswers[count];
  }

  var answer = parseInt(prompt(wholeQuestion));

  while (answer < 1 || answer > questions[i].possibleAnswers.length || isNaN(answer)){
    alert("That is not a valid answer.");
    var answer = parseInt(prompt(wholeQuestion));
  } 
  
  if (questions[i].possibleAnswers[answer-1] === questions[i].answer){
    alert("Congratulations! You picked the correct answer.");
    score++;
  }
  else{
    alert("Wrong answer.")
  }
}
  
  