// Global Info

var words = ['word123', 'word1234', 'word123456'];
var wordsPlayed = [];
var guesses = 10;
var guessedLetters = [];
var testWord = "bye"
var correctLetters = [];

// Pick a random word
// var currentWord = words[Math.floor(Math.random() * words.length)];



// Display number of dashses for word
// for (i in current_word) {
//   console.log('hello')
// }

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




var currentWord = "hello"
var currentWordArray = []
for (var i = 0; i < currentWord.length; i++) {
  currentWordArray.push(currentWord.charAt(i));
  currentWordArray.sort();
}

// Guess word
document.onkeyup = function(event) {
  var letterGuess = event.key;
  console.log(letterGuess);


  // letter is not in word
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
};

// array of random words given theme
