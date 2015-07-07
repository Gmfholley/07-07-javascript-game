var question1 = {
  question: "A magical jar of jelly beans doubles the number of jelly beans every minute.  The jar is full at noon.  When is it half full?",
  answer: "11:59",
  possibleAnswers: ["11:59", "11:30", "It is impossible to answer this question.", "12:01"]
};

var question2 = {
  question: "Kerry, Wendy and Sumeet have 12 dinosaurs. Kerry has twice as many as Wendy, and Sumeet has three times as many as Wendy. How many dinosaurs does Sumeet have?",
  answer: 6,
  possibleAnswers: [4, 2, 6, 3]
};

var question3 = {
  question: "|1|2|3|\n|4|5|6|\n|7|8|9|\n\nIn a game of tic-tac-toe, assuming your opponent is a savvy player, what would be a losing first move?",
  answer: 4,
  possibleAnswers: [1, 3, 4, 5]
};

var question4 = {
  question: "You have 27 coins, each of them weighing 10 ounces. Except for one, which either weighs 9 or 11 ounces. You have a balance scale. What is the minimum number of weighings to determine which coin is different?",
  answer: 3,
  possibleAnswers: [3, 4, 5, 14] 
};


var questions = [question1, question2, question3, question4];
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
    alert("Wrong answer. The correct answer is " + questions[i].answer + ".");
  }
}
  
alert("Your final score is " + ((score/questions.length) * 100) + "%");  