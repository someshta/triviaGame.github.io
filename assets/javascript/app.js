//1. variables: questions[will these be objects?], timer, correctAnswers, incorrectAnswers, unanswered
var questions = [
	{
		question: "When hippos are upset, what color does their sweat turn?",
		answers: ["Blue", "Green", "Red", "Yellow"],
		correctAnswer: "Red"
	},
	{	
		question: "How many calories would you burn if you banged your head against a wall for one hour?",
		answers: ["20", "60", "120", "150"],
		correctAnswer: "150"

	},
	{
		question: "Fill in the blank: A sheep, a duck and a ___ were the first passengers on a hot air balloon.",
		answers: ["Rooster", "Human", "Pig", "Sandwich"],
		correctAnswer: "True"
	},
	{
		question: "Paraskavedekatriaphobia is the fear of what?",
		answers: ["Fun", "Friday the 13th", "Parasailing", "Carving a Turkey"],
		correctAnswer: "Friday the 13th"
	}

] 

var i = 0;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

function startGame() {
	$("#youReady").empty();
	qAs()
	timer()
}
// 2. create timer that will count down from 30
var counter = 10;
function timer() {
	setInterval(function(){
	  console.log(counter);
	  counter--
	  if (counter === 0) {
	    console.log("derrrrrp");
	   	counter = 10;
	  }
	}, 1000);
}
 

//3. for loop that will display a question and the corresponding answers
function qAs() {

	$("#question").append(questions[i].question);
	
	for (var j = 0; j < questions.length; j++) {
		
		console.log(questions[i].question);
		console.log(questions[i].answers);
		console.log(questions[i].correctAnswer);
		
		var a = $("<button>");
		a.addClass("answer");
		a.text(questions[i].answers[j]);
		$("#answers").append(a);

		
	}

	//4.2 IF user runs out of time, display INCORRECT, log info into unanswered, move on to next question
	
// function checkAnswers() {
// var userChoice = [];
// 		if (userChoice === questions[i].correctAnswer) {
// 			alert("YOU GOT IT!");
// 		}
// 	}
}


//4.1 ELSE IF user clicks incorrect answer, display INCORRECT, log info into incorrectAnswers, move on to next question
//4. ELSE user clicks correct answer, display CORRECT, log info into correctAnswers, move on to next question
//5. When player goes through all the questions, display their score (correct, incorrect and unanswered)
//5.1 Player can click a button that will restart the quiz, reset their score to 0