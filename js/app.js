var allQuestions = [
  { /* empty! */ },
  {question: "What is the capital of Canada?", choices: ["Toronto", "Montreal", "Ottawa", "Vancouver"], correctAnswer: 2}, /* end question number 1 */
  {question: "What is the capital of Pakistan?", choices: ["Islamabad", "Karachi", "Peshawar", "Lahore"], correctAnswer: 0}, /* end question number 2 */
  {question: "What is the capital of Saudi Arabia?", choices: ["Dubai", "Doha", "Jeddah", "Riyadh"], correctAnswer: 3}, /* end question number 3 */
  {question: "What is the capital of Oman?", choices: ["Dammam", "Manama", "Amman", "Muscat"], correctAnswer: 3} /* end question number 4 */
];

var next = document.getElementById("next");
var choices = allQuestions.choices;
var counter = 1;
var score;
var correctAnswers = 0;
var incorrectAnswers = 0;

$(document).ready(function() { /* function to start with first question */
  $("#question-text").append(allQuestions[1].question);
  for (var i=0; i<allQuestions[1].choices.length; i++) {
      $("#choices").append('<li class="answer"><input type="radio" name="quiz-answer" value="' + i + '"><span>' + allQuestions[1].choices[i] + '</span></input></li>');
    }
  
});

next.onclick = function() { /* function used to generate questions when clicking next question*/
  var value = $("input[type='radio']:checked").val(); /* store the  selected answer */
  var emptyQuestion = []; /* start with an empty array */
  counter++; /* increment the counter to cycle through questions */
  emptyQuestion = allQuestions[counter]; /* fill empty array with each new question onclick */
  
  if (counter > allQuestions.length - 1) { /* check if there are still questions left, if not... */
    $("#question-text").empty(); /* remove question */
    $("#choices").empty(); /* remove choices */
    $("#button-container").empty(); /*remove next button */
    $("#question-text").append("Final score"); /* add score title */
    
      if (value == allQuestions[counter - 1].correctAnswer) { /* checking to see if the answer is right */
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
      }
    
      score = Math.round((correctAnswers / (correctAnswers + incorrectAnswers)) * 100); /* assign score and round it */
      $("#score").append(score + '%').hide().fadeIn("slow");
  } 
  
  else { /* ..otherwise, keep on goin' */
    
    $("#question-text").empty(); /* reset question text onclick */
    $("#choices").empty(); /* reset choices onclick */

    $("#question-text").append(emptyQuestion.question); /* appends the quiz question onclick */

    for (var i=0; i<emptyQuestion.choices.length; i++) { /* function to append the quiz answers onclick */
        $("#choices").append('<li class="answer"><input type="radio" name="quiz-answer" value="' + i + '"><span>' + emptyQuestion.choices[i] + '</span></input></li>');
      }

    if (value == allQuestions[counter - 1].correctAnswer) { /* checking to see if the answer is right */
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }
             
  } /* end if-else statement to check if user is out of questions */  
  
};

