//1. variables: questions[will these be objects?], timer, correctAnswers, incorrectAnswers, unanswered
var questions = [{
        question: "When hippos are upset, what color does their sweat turn?",
        answers: ["Blue", "Green", "Red", "Yellow"],
        correctAnswer: "Red"
    }, {
        question: "How many calories would you burn if you banged your head against a wall for one hour?",
        answers: ["20", "60", "120", "150"],
        correctAnswer: "150"

    }, {
        question: "Fill in the blank: A sheep, a duck and a ___ were the first passengers on a hot air balloon.",
        answers: ["Rooster", "Human", "Pig", "Sandwich"],
        correctAnswer: "Rooster"
    }, {
        question: "Paraskavedekatriaphobia is the fear of what?",
        answers: ["Fun", "Friday the 13th", "Parasailing", "Carving a Turkey"],
        correctAnswer: "Friday the 13th"
    }

]

var i = 0;
var intervalIndentity;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

$("body").on('click', '.answer', function() {
    console.log($(this).attr("options"));
    console.log($(this).attr("correct"));

    var userChoice = $(this).attr("options");
    var correct = $(this).attr("correct");

    checkAnswer(userChoice, correct)
});


function startGame() {
    $("#youReady").empty();
    qAs()
        
}
// 2. create timer that will count down from 30
var counter = 10;

function timer() {
    intervalIndentity = setInterval(function() {
        console.log(counter);
        counter--
        $("#timer").html(counter);
        if (counter === 0) {
            console.log("derrrrrp");
            clearInterval(intervalIndentity);
            counter = 10;
        }
    }, 1000);
}


//3. for loop that will display a question and the corresponding answers
function qAs() {
    $("#youReady").empty();
    $("#answers").empty();
    timer();
    $("#question").html(questions[i].question);

    for (var j = 0; j < questions.length; j++) {


        var a = $("<button>");
        a.addClass("answer");
        a.attr("options", questions[i].answers[j]);
        a.attr("correct", questions[i].correctAnswer);
        a.text(questions[i].answers[j]);
        $("#answers").append(a);


    }
    console.log(questions[i].question);
    console.log(questions[i].answers);
    console.log(questions[i].correctAnswer);

}

function checkAnswer(userC, correctAnswer) {
    if (counter == 0) {
    	alert("you ran out of time dummy!");
    	i++;
    	unansweredQuestions++;
    	console.log(unansweredQuestions);
    }

    else if (userC !== correctAnswer) {
        alert("ding dong");
        i++;
        incorrectAnswers++;
        console.log("incorrect answers" + incorrectAnswers);
    } 

    else if (userC === correctAnswer) {
        alert("nailed it");
        i++;
        correctAnswers++;
        console.log("correct answers" + correctAnswers);
    }

    qAs();
}



//4.2 IF user runs out of time, display INCORRECT, log info into unanswered, move on to next question


//4.1 ELSE IF user clicks incorrect answer, display INCORRECT, log info into incorrectAnswers, move on to next question
//4. ELSE user clicks correct answer, display CORRECT, log info into correctAnswers, move on to next question
//5. When player goes through all the questions, display their score (correct, incorrect and unanswered)
//5.1 Player can click a button that will restart the quiz, reset their score to 0