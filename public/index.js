  let words = ["geeks", "for", "geeks", "a", 
                "portal", "to", "learn", "can",
                "be", "computer", "science", 
                 "zoom", "yup", "fire", "in", 
                 "be", "data", "geeks"];
//User words that has been typed
let user_words = [];
var text_input = document.getElementById("text-input-button");
var btn = document.getElementById("start-typing-button");
var count = 0;

/////FUNCTIONS/////
function user_append(user_input){ //Function to append users words to array
  user_words.push(user_input);
  console.log(user_words);
}
btn.onclick = function() {
  cycle = 0;
  if(words[cycle])
  {
  document.getElementById('what-to-type').innerHTML = words[cycle];
  }
  
  
}
document.getElementById("text-input-button").addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {
      console.log(words.length)
      console.log(count)
      if(words.length > (count +1))
      {


        //Clears input box before next input
      
      
        var user_input = document.getElementById("post-text-input").value; 
        
        
        if(user_input === words[count])
        {
          document.getElementById('is-it-correct').innerHTML = 'CORRECT';
          count = count + 1;
        

        }
        else{
          document.getElementById('is-it-correct').innerHTML = 'INCORRECT';
        }
        
        if(words[count]) {
          document.getElementById('what-to-type').innerHTML = words[count];
        }
      }
      else {
        var pop_up = document.getElementsByClassName('hidden');
        for (var i = 0; i < pop_up.length; i++) {
          pop_up[i].style.display = 'block';
        }
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


var startButton = document.getElementById('start-typing-button')

function startTypingButton() //function to hide and unhide html parts
{
  var unhideInput = document.getElementById('typing-input')
  var unhideText = document.getElementById('what-to-type')
  var hideStart = document.getElementById('start-typing-button')
  var hideHigh = document.getElementById('highscore-box')
  var hideGroup = document.getElementById('coding')
  document.getElementById('what-to-type').innerHTML = words[0]
  unhideInput.classList.toggle('hidden')
  unhideText.classList.toggle('hidden')
  hideStart.classList.toggle('hidden')
  hideHigh.classList.toggle('hidden')
  hideGroup.classList.toggle('hidden')
}

startButton.addEventListener('click', startTypingButton)