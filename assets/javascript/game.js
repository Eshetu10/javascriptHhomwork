var lotrChar = [
    
    "panda",
    "monkey",
    "zibra",
    "dog",
    "cobra",
    "snake",
    "horse",
    "cow",
    "cat",
    "giraff",
    "lion",
    "tiger"
 ];
 var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
 console.log(alphabet);
 var wins = 0;
 var losses = 0;
 var guessCount = 0;
 var guesses = [];
 var hiddenWord = "";
 var displayWord = [];
 var wrongGuesses = [];
 function startGame() {
    guessCount = 5;
    guesses = [];
    wrongGuesses = [];
    hiddenWord = lotrChar[Math.floor(Math.random() * lotrChar.length)].toLowerCase();
    displayWord = hiddenWord.split("").map(letter => {
        return "_"
    });
    console.log(`Guess Count: ${guessCount}\nHidden Word: ${hiddenWord}\nHidden Letters: ${displayWord}\nWrong Guesses: ${wrongGuesses}\nGuesses: ${guesses}`);
    document.getElementById("underscores").textContent = displayWord.join(" ");
    document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" ");
 }
 function checkLetters(userGuess) {
    var wrongGuesses = true;
    for (var i = 0; i < displayWord.length; i++) {
        if (hiddenWord[i] === userGuess) {
            displayWord[i] = userGuess;
            wrongGuesses = false;
        }
    }
    console.log(`Guess Count: ${guessCount}\nUpdated Hidden Word: ${displayWord.join("")}\nWrong Guesses: ${wrongGuesses}\nGuesses: ${guesses}`);
    return wrongGuesses;
 }
 function roundFinish() {
    console.log(`Wins: ${wins} | LossCount: ${losses} | Guesses Left: ${guessCount}`);
    document.getElementById("guesses-remaining").textContent = guessCount;
    document.getElementById("underscores").textContent = displayWord.join(" ");
    document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" ");
    
    if (displayWord.indexOf("_") === -1) {
        
        wins++;
        alert(`Congrats! You guessed ${hiddenWord}`);
        
        document.getElementById("win-counter").textContent = wins;
        startGame();
    }
    else if (guessCount <= 0) {
       
        losses++;
       
        alert("Oh no! The word was " + hiddenWord + "! \n\nI");
       
        document.getElementById("loss-counter").textContent = losses;
        
        startGame();
    }
 }
 startGame();

 document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("directions").textContent = " ";
    
    if (alphabet.indexOf(userGuess) === -1) {
        return
    };
    if (guesses.indexOf(userGuess) === -1) {
        guesses.push(userGuess);
       
        if (checkLetters(userGuess)) {
            wrongGuesses.push(userGuess);
            guessCount--;
        }
    }
   
    roundFinish();
    console.log(`User Guess: ${userGuess}`)
 };
 