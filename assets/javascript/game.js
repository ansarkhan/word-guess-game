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

// Guess word
document.onkeyup = function(event) {
  var letterGuess = event.key;
  console.log(letterGuess);

  var currentWord = "hello"

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
      console.log(guessedLetters, correctLetters);
    }
  }
};

// array of random words given theme

// for (var i = 0; i < currentWord.length; i++) {
//   if (currentWord[i] == letterGuess) {
//     if (correctLetters.indexOf(letterGuess === -1)) {
//       correctLetters.push(currentWord[i]);
//       console.log(correctLetters);



  // record user key
  // if word complete push to words_played queue
  // if in word (index is not -1) show on screen indexOf
  // if in guessed_letter array, ignore
  // if neither, decrement guesses by 1, add to guessed_letter array

// 
