let words = ["geeks", "for", "geeks", "a",
	"portal", "to", "learn", "can",
	"be", "computer", "science",
	"zoom", "yup", "fire", "in",
	"be", "data", "geeks", "addicted", "driving", "division", "scarecrow", "territory", "alluring", "ignore",
	"underwear", "arrange", "lunchroom", "sun", "possessive", "jumbled", "channel", "confess", "elbow", "short",
	"wind", "pail", "doubt", "hideous", "dashing", "charming", "answer", "incompetent", "market", "theory", "grandmother",
	"pause", "guard", "flawless", "grubby", "screw", "channel", "kiss", "hammer", "iron", "hall", "sea", "abashed", "line",
	"travel", "actor", "cheer", "erect", "airport", "authority", "frantic", "crash", "notebook", "helpful", "abundant", "friend",
	"basketball", "planes", "ski", "prose", "thin", "deep", "meek", "jazzy", "cake", "grieving", "worry", "natural", "pleasant", "cook",
	"fowl", "awful", "closed", "observant", "roasted", "questionable", "slim", "tow", "comfortable", "shelf", "ice", "nasty", "superb",
	"awake", "skirt", "terrific", "example", "mislead", "tight", "bait", "pay", "irate", "chemical", "go", "stir", "vast", "surge", "growth",
	"income", "ants", "crate", "wide", "loose", "front", "staking", "pretend", "disturbed", "snakes", "journey", "goldfish", "unknown", "net",
	"fish", "cool", "school", "oregon", "state", "university", "computer", "science", "book", "read", "monitor", "nintendo", "fun", "give", "bad",
	"hello", "bowl", "spoon", "cereal", "pen", "speaker", "cup", "mug", "coffee", "flask", "table", "bed", "drawer", "chair", "pillow", "friend",
	"assignment", "keys", "dome", "ear", "face", "eyes"];
let user_words = [];
let highScores = [];


var gameLength = 15
console.log('hello')
var count = 0;
var correct = 0;
var liveGame = false;
var scoreScreen = false;
var random = Math.floor(Math.random() * words.length)


var start = 0
var end = 0
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
}

document.getElementById("post-text-input").addEventListener('keypress', function (e) {

	if (e.key === 'Enter' && scoreScreen === false) {
		if (gameLength > (count + 1) && liveGame === true) {
			console.log(count)
			console.log(random)
			//Clears input box before next input


			var user_input = document.getElementById("post-text-input").value;


			if (user_input === words[random]) {
				document.getElementById('is-it-correct').innerHTML = 'CORRECT';
				correct = correct + 1;
			}
			else {
				document.getElementById('is-it-correct').innerHTML = 'INCORRECT';
			}
			count = count + 1;
			random = Math.floor(Math.random() * words.length)
			if (words[random]) {
				
				document.getElementById('what-to-type').innerHTML = words[random];
			}
		}
		else {
      scoreScreen = true
      end = Date.now()
      liveGame = false
			count = 0;
			//pauseTimer();
			var time = ((end-start)/1000)/60
			score = Math.round(correct / time)
			var pop_upBack = document.getElementById('modal-backdrop');
			var pop_up = document.getElementById('save-score-modal');
			var editScoreLabel = document.getElementById('score-output')
			pop_up.classList.remove('hidden');
			pop_upBack.classList.remove('hidden');

			editScoreLabel.textContent = "Score " + score + 'words/minute'
		}


		document.getElementById("post-text-input").value = "";
	}

});



var startButton = document.getElementById('start-typing-button')

function startTypingButton() //function to hide and unhide html parts
{
  scoreScreen = false
  liveGame = true
  start = Date.now()
	document.getElementById('is-it-correct').innerHTML = 'Have Fun';
	var unhideCorrect = document.getElementById('is-it-correct')
	var unhideInput = document.getElementById('typing-input')
	var unhideText = document.getElementById('what-to-type')
	var hideStart = document.getElementById('start-typing-button')
	var hideHigh = document.getElementById('highscore-box')
	var hideGroup = document.getElementById('coding')
	document.getElementById('what-to-type').innerHTML = words[random]
	unhideInput.classList.remove('hidden')
	unhideText.classList.remove('hidden')
	unhideCorrect.classList.remove('hidden')
	hideStart.classList.add('hidden')
	hideHigh.classList.add('hidden')
	hideGroup.classList.add('hidden')
	//startTimer();
}

startButton.addEventListener('click', startTypingButton)


var dontSaveButtons = document.getElementsByClassName('modal-hide-button')

function closeBox() {
	document.getElementById('name-input').value = ''
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
	//resetTimer();
}

var closeButton = document.getElementById('modal-close')
var cancelButton = document.getElementById('modal-cancel')
cancelButton.addEventListener('click',handleClose)
closeButton.addEventListener('click', handleClose)
function handleClose() {
  closeBox()
}

var saveButton = document.getElementById('modal-accept')
saveButton.addEventListener('click', handleSave)
function handleSave () {
  var name = document.getElementById('name-input').value.trim()
	if (name === "") {
		alert("Please put in your name");
	}
	else {
		insertScore(name, score)
		var addingScore = {
			username: name,
			wpm: score
		}
		highScores.push(addingScore);

		highScores.sort(function (a, b) { return b.wpm - a.wpm })
		updateArray()
		closeBox()
	}

}

function insertScore(username, wpm) {
	var content = {
		username: username,
		wpm: wpm
	};

	var url = '/addScore';
	var req = new XMLHttpRequest();
	req.open('POST',url)

	var reqBody = JSON.stringify(content)
	req.setRequestHeader('Content-Type', 'application/json')
	req.send(reqBody)
}

function parsePostElem(highToArray) {
	var username = highToArray.querySelector('.username')
	var wpm = highToArray.querySelector('.wpm')

  var userScore = {
    username: username.textContent,
    wpm: wpm.textContent
	};
		return userScore;
  };

function scoreInsert(username, wpm)
{
	var high_score_box = document.getElementById('highscore-container')

	var newScore = {
		username: username,
		wpm: wpm
	}
	var scoreCard = Handlebars.templates.highScore(newScore);
  high_score_box.insertAdjacentHTML('beforeend', scoreCard)
}

function updateArray()
{
	var highScoresContainer = document.getElementById('highscore-container')
	while(highScoresContainer.lastChild)
	{
		highScoresContainer.removeChild(highScoresContainer.lastChild)
	}
	highScores.forEach(function (userScore)
	{
		scoreInsert(userScore.username, userScore.wpm)
  })
}


window.addEventListener('DOMContentLoaded', function (){
	var highToArrays = document.getElementsByClassName('highScoreContainer');
	for(var i = 0; i < highToArrays.length; i++)
	{

		highScores.push(parsePostElem(highToArrays[i]));
	}
})
