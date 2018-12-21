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

var emptyArray = function(arr1) {
  if (array === undefined || array.length == 0) {
    return true;
  }
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
  if (currentWord.indexOf(letterGuess) === -1 ) {
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
  } else if (currentWord.indexOf(letterGuess) !== -1 ) {
    // word is complete

    // push to correct letter and guessed letter queues
    if (correctLetters.indexOf(letterGuess) === -1) {
      guessedLetters.push(letterGuess);
      correctLetters.push(letterGuess);
      correctLetters.sort();
      if (equalArray(currentWordArray, correctLetters)) {
        console.log("You guessed the word!");
      }
    }
  }
};

// array of random words given theme
