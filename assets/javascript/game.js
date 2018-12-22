// Global Info


var words = ['word123', 'word1234', 'word123456'];
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
  currentWordArray.sort();
}

// dashes for word
for (i=0; i < currentWordArray.length; i++) {
  var letterBtn = $("<button>");
  letterBtn.addClass("btn-large");
  letterBtn.attr("data-letter", currentWordArray[i]);
  letterBtn.text("---");
  $("#blanks").append(letterBtn);

}


// Pick a random word


// function to check if arrays are equal
var equalArray = function (arr1, arr2) {
  if(arr1.length !== arr2.length)
      return false;
  for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
          return false;
  }
  return true;
}

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
        guesses--;
      // letter was already guessed
      } else {
        console.log("You already guessed this letter!");
      }
      // letter is in word
    } else if (currentWordArray.indexOf(letterGuess) !== -1 ) {
        guessedLetters.push(letterGuess);
        removeLetter(currentWordArray, letterGuess);
        console.log(currentWordArray);
        if (emptyArray(currentWordArray)) {
          console.log("You guessed the word!");
        }
      }
  
    // guessed letters printing

    // for (i=0; i < guessedLetters.length; i++) {
    //   var letterP = $("<button>");
    //   letterP.addClass("btn-large");
    // }
    // // letterP.attr("data-letter", guessedLetters[i]);
    // // letterP.text(guessedLetters[i]);
    // // $("#guessed-letters").append(letterP);

  } else {
    console.log("Not a letter!")
  }

};

// array of random words given theme
