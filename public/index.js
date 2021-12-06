let words = ["geeks", "for", "geeks", "a",
	"portal", "to", "learn", "can",
	"be", "computer", "science",
	"zoom", "yup", "fire", "in",
	"be", "data", "geeks"];
let user_words = [];
var text_input = document.getElementById("text-input-button");
var btn = document.getElementById("start-typing-button");
var count = 0;
var correct = 0;

//Variables for timer
let minute = 0;
let second = 0;
let millisecond = 0;
let stopWatch;

//Variable for score
let score = 0;

/////FUNCTIONS/////
function user_append(user_input) { //Function to append users words to array
	user_words.push(user_input);
	console.log(user_words);
}

/*
btn.onclick = function () {
	cycle = 0;
	if (words[cycle]) {
		document.getElementById('what-to-type').innerHTML = words[cycle];
	}
}
*/
document.getElementById("text-input-button").addEventListener('keypress', function (e) {

	if (e.key === 'Enter') {
		if (words.length > (count + 1)) {
      console.log(count)


			//Clears input box before next input


			var user_input = document.getElementById("post-text-input").value;


			if (user_input === words[count]) {
				document.getElementById('is-it-correct').innerHTML = 'CORRECT';
				correct = correct + 1;
			}
			else {
				document.getElementById('is-it-correct').innerHTML = 'INCORRECT';
			}
			count = count + 1;
			if (words[count]) {
				document.getElementById('what-to-type').innerHTML = words[count];
			}
		}
		else {
			count = 0;
			pauseTimer();
			var time = minute + '.' + second + millisecond;
			score = correct / time
			var pop_upBack = document.getElementById('modal-backdrop');
			var pop_up = document.getElementById('save-score-modal');
			var editScoreLabel = document.getElementById('score-output')
			pop_up.classList.remove('hidden');
			pop_upBack.classList.remove('hidden');
			editScoreLabel.textContent = "Score: " + score + 'words/minute'
		}


		document.getElementById("post-text-input").value = "";
	}

});
/*
//This function compares the words in words and users array
function isCorrect(user_input)
{
  if(user_input === words[count]) {
    return true;
  }
  else {
    return false;
  }
  is_true = true;
 for(var i = 0 ; i < words.length; i++)
 {
   if(words[i] == user_input){
     is_true = true;
     break;
   }
   else{
     is_true = false;
   }
 }
 return is_true;
}
*/

//Functions for timers

function startTimer() {
	pauseTimer();
	stopWatch = setInterval(() => { timer(); }, 10);
}

function pauseTimer() {
	clearInterval(stopWatch);
}

function resetTimer() {
	minute = 0;
	second = 0;
	millisecond = 0;
}

function timer() {
	if ((millisecond += 10) == 1000) {
		millisecond = 0;
		second++;
	}
	if (second == 60) {
		second = 0;
		minute++;
	}
	if (minute == 60) {
		minute = 0;
	}
}



var startButton = document.getElementById('start-typing-button')

function startTypingButton() //function to hide and unhide html parts
{
  //document.getElementById('name-input').value = ''
	document.getElementById('is-it-correct').innerHTML = 'Have Fun';
	var unhideCorrect = document.getElementById('is-it-correct')
	var unhideInput = document.getElementById('typing-input')
	var unhideText = document.getElementById('what-to-type')
	var hideStart = document.getElementById('start-typing-button')
	var hideHigh = document.getElementById('highscore-box')
	var hideGroup = document.getElementById('coding')
	document.getElementById('what-to-type').innerHTML = words[0]
	unhideInput.classList.remove('hidden')
	unhideText.classList.remove('hidden')
	unhideCorrect.classList.remove('hidden')
	hideStart.classList.add('hidden')
	hideHigh.classList.add('hidden')
	hideGroup.classList.add('hidden')
	startTimer();
}

startButton.addEventListener('click', startTypingButton)


var dontSaveButtons = document.getElementsByClassName('modal-hide-button')

function closeBox() {
	var hideHighScoreBox = document.getElementById('save-score-modal')
	var hideHighScoreBoxback = document.getElementById('modal-backdrop')
	var hideInput = document.getElementById('typing-input')
	var hideText = document.getElementById('what-to-type')
	var hideCorrect = document.getElementById('is-it-correct')
	var unhideStart = document.getElementById('start-typing-button')
	var unhideHigh = document.getElementById('highscore-box')
	var unhideGroup = document.getElementById('coding')
	hideHighScoreBox.classList.add('hidden')
	hideHighScoreBoxback.classList.add('hidden')
	hideInput.classList.add('hidden')
	hideText.classList.add('hidden')
	hideCorrect.classList.add('hidden')
	unhideStart.classList.remove('hidden')
	unhideHigh.classList.remove('hidden')
	unhideGroup.classList.remove('hidden')
	score = 0;
	correct = 0;
	resetTimer();
}

for (var i = 0; i < dontSaveButtons.length; i++) {
	console.log('test')
	dontSaveButtons[i].addEventListener('click', closeBox)
}

var saveButton = document.getElementById('modal-accept')

function saveScore() {
	var saveScore = 0;
	closeBox()
}

saveButton.addEventListener('click', saveScore)
