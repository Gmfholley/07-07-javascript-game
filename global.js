var question1 = {
  question: "A magical jar of jelly beans doubles the number of jelly beans every minute.  The jar is full at noon.  When is it half full?",
  answer: "11:59",
  arrayOfPossibleAnswers: ["11:59", "11:30", "It is impossible to answer this question.", "12:01"]
};

var directions = "Enter the number corresponding to your answer.";

var wholeQuestion = directions + "\n\n" + question1.question + "\n";

for (count = 0; count < question1.arrayOfPossibleAnswers.length; count++ ){
  wholeQuestion += "\n " + (count + 1) + ". " + question1.arrayOfPossibleAnswers[count];
}

var answer = parseInt(prompt(wholeQuestion));

while (answer < 1 || answer > question1.arrayOfPossibleAnswers.length || isNaN(answer)) {
  alert("That is not a valid answer.");
  var answer = parseInt(prompt(wholeQuestion));
} 
  