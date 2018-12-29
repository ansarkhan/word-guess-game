// Global Info


var words = ['bells'];
var wordsPlayed = [];
var guesses = 10;
var guessedLetters = [];
var testWord = "bye"
var correctLetters = [];
var currentWord = words[Math.floor(Math.random() * words.length)];
var currentWordArray = []
var allLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


for (var i = 0; i < currentWord.length; i++) {
  currentWordArray.push(currentWord.charAt(i));
}

// dashes for word 
for (i=0; i < currentWordArray.length; i++) {
  var letterBtn = $("<button>");
  letterBtn.addClass("btn-large blank-letter");
  letterBtn.attr("data-letter", currentWordArray[i]);
  letterBtn.text("---");
  $(".blanks").append(letterBtn);

}

$("#guesses").text(guesses);


// Pick a random word


// function to check if array is empty
var emptyArray = function(arr1) {
  if (arr1 === undefined || arr1.length == 0) {
    return true;
  }
}

// function to remove specified letter from array
var removeLetter = function removeA(arr) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax= arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
      }
  }
  return arr;
}




// Guess word
document.onkeyup = function(event) {
  var letterGuess = event.key;
  console.log(letterGuess);



  // letter is not in word
  if (allLetters.indexOf(letterGuess) !== -1) {

    if (currentWordArray.indexOf(letterGuess) === -1 ) {
      // letter has not been guessed before
      if (guessedLetters.indexOf(letterGuess) === -1) {
        console.log("Incorrect guess!")
        guessedLetters.push(letterGuess);
        $("#guessed-letters").text(guessedLetters);
        guesses--;
        $("#guesses").text(guesses);
        if (guesses === 0) {
          alert("Game over!");
        }
      // letter was already guessed
      } else {
        console.log("You already guessed this letter!");
      }
      // letter is in word
    } else if (currentWordArray.indexOf(letterGuess) !== -1 ) {
        // show the letter on screen
        var blankShow = document.getElementsByClassName("blank-letter")
        for (i=0; i<blankShow.length; i++) {
          while (letterGuess === blankShow[i].getAttribute("data-letter")) {
            blankShow[i].replaceWith(letterGuess);
          }

        }

        // push letter to correct arrays
        guessedLetters.push(letterGuess);
        $("#guessed-letters").text(guessedLetters);
        removeLetter(currentWordArray, letterGuess);
        console.log(currentWordArray);
        if (emptyArray(currentWordArray)) {
          console.log("You guessed the word!");
        }
      }
  
   else {
    console.log("Not a letter!")
    }
  }
}