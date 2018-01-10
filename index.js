'use strict';

const questionsArray = [
	{
		question: "Who is the Readers Digest addressed to that gets delivered to Chandler and Joeys?",
		'A': "A) Mr. Chandler Bing",
		'B': "B) Ms. Chanandler Bong",
		'C': "C) Mr. Joey Tribbiani",
		'D': "D) Ms. Rachel Green",
		correctAnswer: "B"
	},
	{
		question: "What is the name that Mike, Phoebe's fiance, wants to change his name to?",
		'A': "A) Princess Consuela Banana Hammock",
		'B': "B) Crap Bag",
		'C': "C) Mike Roch",
		'D': "D) Hyot",
		correctAnswer: "B"
	},
	{
		question: "What does Ross call the Sandwich that he makes with Thanksgiving left overs?",
		'A': "A) The Holiday Hammy",
		'B': "B) The Tasty Turkey",
		'C': "C) The Moist Maker",
		'D': "D) The Cranberry Club",
		correctAnswer: "C"
	},
	{
		question: "In Season 3, What causes Joey to have to wear a sling?",
		'A': "A) Playing fire ball",
		'B': "B) Falling down the stairs",
		'C': "C) Hit by a car",
		'D': "D) Jumping on the bed",
		correctAnswer: "D"
	},
	{
		question: "What was Central Perk before it was a coffee shop?",
		'A': "A) A bar",
		'B': "B) Another coffee shop",
		'C': "C) Movie rental shop",
		'D': "D) Convenience store",
		correctAnswer: "A"
	},
	{
		question: "In one episode what does Chandler say is the source of all his power, in regards to his humor?",
		'A': "A) His Rocky and Bullwinkle socks",
		'B': "B) His parents divorcing when he was a child",
		'C': "C) His nubin",
		'D': "D) Not being good with women",
		correctAnswer: "C"
	},
	{
		question: "What does Rachel convince Ross's girlfriend to do when they are all at the beach for the weekend?",
		'A': "A) Shave her head",
		'B': "B) Break up with Ross",
		'C': "C) Play strip poker",
		'D': "D) To go home",
		correctAnswer: "A"
	},
	{
		question: "What does Ross dress up as at a Halloween party?",
		'A': "A) An armadillo",
		'B': "B) Superman",
		'C': "C) A pink bunny",
		'D': "D) Spudnik",
		correctAnswer: "D"
	},
	{
		question: "How many times has Ross been married?",
		'A': "A) 1",
		'B': "B) 2",
		'C': "C) 3",
		'D': "D) 4",
		correctAnswer: "C"
	},
	{
		question: "What is the name of Joey's Recliner?",
		'A': "A) Stevie",
		'B': "B) Rosita",
		'C': "C) The General",
		'D': "D) Porsche",
		correctAnswer: "B"
	}
];

var scoreCounter = 0;
var currentQuestionCounter = 1;
var currentQuestionIndex = 0;

function startQuiz(){
	//user should be able to click a button to start the quiz
	//render question page with random question and the potential answers
	$(".start-quiz-button").on("click", function(){
		$(".start-page").addClass("js-start-page"); //adds class which hides the start page
		$(".questions-page").toggleClass("js-questions-page", false); //removes class which is hiding the questions page
	});
}


function renderQuestion(){
	//render question page with question and the potential answers
 		$(".js-multiple-choice-answers-container").prepend(
			`<h1 class = "js-question-string">${(questionsArray[currentQuestionIndex]['question'])}</h1>`
		);
}


function renderAnswers(){
	$(".js-multiple-choice-answers-container").append(
		`<ul class= "js-multiple-choice-answers">
				<li><input type="radio" name="answer" id="multiple-choice-answer-A" value= "A" required>
					<label for="multiple-choice-answer-A">${questionsArray[currentQuestionIndex]['A']}</label>
				</li>
				<li><input type="radio" name="answer" id="multiple-choice-answer-B" value= "B" required>
					<label for="multiple-choice-answer-B">${questionsArray[currentQuestionIndex]['B']}</label>
				</li>
				<li><input type="radio" name="answer" id="multiple-choice-answer-C" value= "C" required>
					<label for="multiple-choice-answer-C">${questionsArray[currentQuestionIndex]['C']}</label>
				</li>
				<li><input type="radio" name="answer" id="multiple-choice-answer-D" value= "D" required>
					<label for="multiple-choice-answer-D">${questionsArray[currentQuestionIndex]['D']}</label>
				</li>
			</ul>`
		);
}



function updateQuestionNumberDisplay(){
		$(".js-progress-banner .js-question-number-display").text("Question " + currentQuestionCounter + " / 10");
}


console.log(`The currentQuestionIndex is ${currentQuestionIndex}`);


function handleUnansweredQuestionSubmition(){
	$(".js-submit-question").on('click', function(event){
		let radioButton = $("input[name = 'answer']");

		if(radioButton.filter(':checked').length == 0){
			alert("Please select an answer.");
			console.log("a radio button isn't checked");
		}else{
			handleAnswerSelection();
		}
	});
}


function handleAnswerSelection(){
	console.log("start of handleAnswerSelection");


		let selectedAnswer = $("input[type = radio]:checked").val();
		let correctAnswer = questionsArray[currentQuestionIndex]["correctAnswer"];

		console.log("This is the selected answer " + selectedAnswer);
		console.log("This is the correct answer " + correctAnswer);

		if(selectedAnswer !== correctAnswer){

			console.log("answers don't match")
			console.log("handleAnswerSelection: toggleIncorrectModalClass");

			toggleIncorrectModalClass();
			$(".js-submit-question").prop('disabled', true);  //allows submit button to only be clicked once
			$(".js-answer-feedback").text(`The correct answer is ${questionsArray[currentQuestionIndex]["correctAnswer"]}`);

			console.log(typeof selectedAnswer);
			console.log(typeof correctAnswer);

		}else if(selectedAnswer === correctAnswer){
			console.log("answers match");
			console.log("handleAnswerSelection: toggleCorrectModalClass");

			toggleCorrectModalClass();
			$(".js-submit-question").prop('disabled', true);  //allows submit button to only be clicked once
			}
}




function incrementCurrentQuestionIndex(){
	currentQuestionIndex++;
}



function toggleIncorrectModalClass(){
	console.log("toggleIncorrectModalClass");
	$("#answer-incorrect-modal").toggleClass("js-incorrect-modal");
}



function toggleCorrectModalClass(){
	console.log("toggleCorrectModalClass");
	$("#answer-correct-modal").toggleClass("js-correct-modal");
}


function handleNextButton(){
	$(".js-next-question").on('click', function(){
		incrementCurrentQuestionIndex();
		$(".js-submit-question").prop('disabled', false); //Submit button is no longer disabled once next button in modal is clicked


		console.log("handleNextButton: answer incorrect modal state " + $('#answer-incorrect-modal').hasClass('js-incorrect-modal'));
		console.log("handleNextButton: answer correct modal state " + $('#answer-correct-modal').hasClass('js-correct-modal'));

		if($('#answer-incorrect-modal').hasClass('js-incorrect-modal') === false){
			console.log("handleNextButton: toggleIncorrectModalClass");
			toggleIncorrectModalClass(); //hides incorrect modal if it is visible
		}else if($('#answer-correct-modal').hasClass('js-correct-modal') === false){
			console.log("handleNextButton: toggleCorrectModalClass");
			toggleCorrectModalClass(); //hides correct modal if it is visible
		}
console.log(`handleNextButton: the currentQuestionIndex is ${currentQuestionIndex}`);
console.log(`handleNextButton: the currentQuestionCounter is ${currentQuestionCounter}`);
	});
}


function renderNextQuestion(){
	$(".js-next-question").on('click',function(){
		$(".js-question-string").replaceWith(renderQuestion());//replaces previous question with next question
	});
}

function renderNextAnswers(){
	$(".js-next-question").on('click',function(){
		$(".js-multiple-choice-answers").replaceWith(renderAnswers());//replaces previous answers with new answers
	});
}

function renderUpdatedQuestionCounter(){
	console.log('start of renderUpdatedQuestionCounter working')
	$(".js-next-question").mouseup(function(){
			currentQuestionCounter++;
			updateQuestionNumberDisplay();
	});
}

function renderScoreDisplay(){
	$(".js-progress-banner .js-score-display").text(scoreCounter + " / 10 Correct");
}


function updateScoreDisplay(){
	$(".js-submit-question").on('click', function(){

		let selectedAnswer = $("input[type = radio]:checked").val();
		let correctAnswer = questionsArray[currentQuestionIndex]["correctAnswer"];

		if(selectedAnswer === correctAnswer){
			scoreCounter++;
			renderScoreDisplay();
		}
	});
}

function renderScoreOnResultsPage(){
	$(".results-page .js-final-score").text(scoreCounter + " / 10 Correct");
}


function renderResultsPage(){
	//this function removes the questions page and the correct/incorrec modal
	//and displays the results page after the next button is clicked on the 10th
	//question
	$(".js-next-question").mousedown(function(){
		if(currentQuestionCounter === 10){
			$(".questions-page").toggleClass("js-questions-page", true);

			if($('#answer-incorrect-modal').hasClass('js-incorrect-modal') === false){
				console.log("renderResultsPage: toggleIncorrectModalClass");
				toggleIncorrectModalClass();
			}else if($('#answer-correct-modal').hasClass('js-correct-modal') === false){
				console.log("renderResultsPage: toggleCorrectModalClass");
				toggleCorrectModalClass();
			}
			console.log();
			$(".results-page").toggleClass("js-results-page", false);
			renderScoreOnResultsPage();
		}
	});
}

function startQuizOver(){
	//when user clicks start over on the results page, user will be taken
	//to begining of the quiz
	$(".js-start-over-button").on('click', function(){
		location.reload();
	});
}

function handleQuizApp(){
	startQuiz();
	renderQuestion();
	renderAnswers();
	handleUnansweredQuestionSubmition();
	handleNextButton();
	updateQuestionNumberDisplay();
	renderScoreDisplay();
	renderNextQuestion();
	renderNextAnswers();
	renderUpdatedQuestionCounter();
	updateScoreDisplay();
	renderResultsPage();
	startQuizOver();
}


$(handleQuizApp);
