//object holding all the questions for quiz
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
    //     }, {
    //     	question: "",
    //     	answers: [],
    //     	correctAnswer: ""
    //     },{
    //     	question: "",
    //     	answers: [],
    //     	correctAnswer: ""
    //     },{
    //     	question: "",
    //     	answers: [],
    //     	correctAnswer: ""
    //     },{
    //     	question: "",
    //     	answers: [],
    //     	correctAnswer: ""
    //     },{
    //     	question: "",
    //     	answers: [],
    //     	correctAnswer: ""
    //     },{
    //     	question: "",
    //     	answers: [],
    //     	correctAnswer: ""
    //     },

]

// var i represents the index of the questions in the object

var i = 0;
var intervalIndentity;
var timeoutId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var counter = 15;
var resetButton;
// creates on click events for all the answer buttons. Button user chooses is stored to userChoice, the correct answer is stored to correct. 
//checkAnswer function is called and compares the user choice with the correct answer

$("body").on('click', '.answer', function() {

    console.log($(this).attr("options"));
    console.log($(this).attr("correct"));

    var userChoice = $(this).attr("options");
    var correct = $(this).attr("correct");

    checkAnswer(userChoice, correct)
});

// $("body").on('click', '.restartGame', function() {
// 	restartGame();
// });
//this function starts the game. emptys the html div that holds the game and calls the questions/answers function

function startGame() {

    $("#youReady").empty();
    qAs();

};

// timer for game counts down in 1 second intervals from 10. timer is added to html so user can see. if timer hits 0, time stops and 1 point is added to unansweredQuestions. 
// You will see the correct answer and quiz will automatically move on to next question

function timer() {

    intervalIndentity = setInterval(function() {
        console.log(counter);
        counter--;

        $("#timer").html(counter);

        if (counter === 0) {
            clearInterval(intervalIndentity);
            unansweredQuestions++;

            if (i < questions.length) {
                $("#answers").html("You ran out of time! the correct answer is " + questions[i].correctAnswer);
            }
            moveToNextQuestion();
            clearInterval(intervalIndentity);

        }

    }, 1000);
};


//function loops through questions object and displays question to html.
// var a creates buttons and adds classes/attrs to buttons, appends answers to those buttons

function qAs() {

    $("#youReady").empty();
    $("#answers").empty();
    $("#question").empty();
    timer();

    if (i < questions.length) {
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

    };
};

//function checks users choice with the correct answer.

function checkAnswer(userC, correctAnswer) {


    if (i < questions.length && userC !== correctAnswer) {

        $("#answers").html("ding dong! the correct answer is: " + questions[i].correctAnswer);

        if (i < questions.length - 1) {
            setTimeout(i++, 2000);
            qAs();
        }
        else {
        	i = 0;
        	gameEnd();
        }



        incorrectAnswers++;
        console.log("incorrect answers: " + incorrectAnswers);
        clearInterval(intervalIndentity);
        counter = 15;
    } else if (i < questions.length && userC === correctAnswer) {
        $("#answers").html("Lil smartie pants over here!");
        
        if (i < questions.length - 1) {
            setTimeout(i++, 2000);
            qAs();
        }
        else {
        	i = 0;
        	gameEnd();
        }

        correctAnswers++;
        console.log("correct answers: " + correctAnswers);
        clearInterval(intervalIndentity);
        counter = 15;
    }


    
};

//function automatically moves user to next question if they run out of time. if its the last question move to end game screen,
//if not, continue questions

function moveToNextQuestion() {

    if (i === questions.length - 1) {
        setTimeout(gameEnd, 2000);
        clearInterval(intervalIndentity);
        $("#youReady").empty();

    } else {
        i++;
        setTimeout(startGame, 2000);
        clearInterval(intervalIndentity);
        counter = 15;

    }
};

//function for end of game. will display your score, answers to questions and reset button

function gameEnd() {
    $("#youReady").empty();
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
    $("#finalScore").html("Here's how you did!" + "Correct answers: " + correctAnswers + "Incorrect answers: " + incorrectAnswers + "Unanswered questions: " + unansweredQuestions);

    restartGame();
};

//this function restarts quiz, sets all scores to zero

function restartGame() {
    restartButton = $("<button>");
    restartButton.addClass("restart");
    restartButton.text("Restart Game");
    $("#finalScore").append(restartButton);

    $("body").on('click', '.restartGame', function() {


        i = 0;
        unansweredQuestions = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        startGame();
    })
};


//I need to figure out how to check if there are any more questions in the checkAnswer function
//I need to get the restart game button to work
//I need to show "correct/incorrect" alert on the html, instead of the alert function