let words = ["geeks", "for", "geeks", "a", 
                "portal", "to", "learn", "can",
                "be", "computer", "science", 
                 "zoom", "yup", "fire", "in", 
                 "be", "data", "geeks"];
//User words that has been typed
let user_words = [];
var count = 0;
var text_input = document.getElementById("text-input-button");
var btn = document.getElementById("start-typing-button");

/////FUNCTIONS/////
function user_append(user_input){ //Function to append users words to array
  user_words.push(user_input);
  console.log(user_words);
}
btn.onclick = function() {
  document.getElementById('what-to-type').innerHTML = words[count];
  count = count + 1;
}
document.getElementById("text-input-button").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('what-to-type').innerHTML = words[count];
      count = count + 1;
      //Clears input box before next input
     
      document.getElementById('is-it-correct').innerHTML = 'CORRECT'
      let user_input = document.getElementById("post-text-input").value; 
      document.getElementById("post-text-input").value = " ";
      user_append(user_input);
    }
});
//This function compares the words in words and users array
function isCorrect(user_words){
boolean correct = false;
for (let i = 0; i < words.length; i++){
  for( let p = 0; < user_words.length; p++){
    if(word[i] == user_word[p]){
      correct = true;
      
    }
    else{
      correct = false;
    }
  }


}
}

 