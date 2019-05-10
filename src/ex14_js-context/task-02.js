function Hangman(initWord) {
    var wordToGuess,
        wordArr,
        errNum,
        wrongSymbols,
        guessResult;

    this.getGuessResult = function () {
        guessResult = wordArr.toString().replace(/,/g, "");//stringify array with guessed letters
    }

    function startGame(word) {
        wordToGuess = word;
        wordArr = [];
        wordArr.length = wordToGuess.length; //create array for word to guess
        wordArr.fill("_");  
        errNum = 6;
        wrongSymbols = [];        
        guessResult = wordArr.toString().replace(/,/g, ""); // stringify array                            
    }

    startGame(initWord);

    this.guess = function (letter) {
        var startIndex = 0;
        var letterIndex = wordToGuess.indexOf(letter, startIndex);

        if (letterIndex === -1) {// if letter was not found
            errNum--;
            wrongSymbols.push(letter)

            if (errNum <= 0) {//message if not any errors left                     
                return ("\"" + guessResult + " | You lost =(\"");
            }
            //message if some errors left, format: "wrong letter, errors left 4 | a,k"                          
            return ("\"wrong letter, errors left " + errNum + " | " + wrongSymbols.toString() + "\"");
        }
        while (letterIndex >= 0) { // if letter was found                
            wordArr[letterIndex] = letter;// add guessed letters to the array
            this.getGuessResult(); // stringify array
            startIndex = letterIndex + 1;
            letterIndex = wordToGuess.indexOf(letter, startIndex);
        }
        this.getGuessedString();//return message with guess result 
        return this;               
    }

    this.getGuessedString = function () {

        if (!wordArr.includes("_")) { //if all letters guessed format: "webpurple | You won!"                
            return ("\"" + guessResult + " | You won!\"");
        }                          
        return guessResult //if not all letters guessed format:  we_p__p_e         
    };

    this.getErrorsLeft = function () { return errNum };

    this.getWrongSymbols = function () { return wrongSymbols };

    this.getStatus = function () { // format "we_p__p_e | errors left 4"              
        return ("\"" + guessResult + " | errors left " + errNum + "\"");
    }

    this.startAgain = function (newWord) {
        startGame(newWord);        
    }
}    

var hangman = new Hangman('webpurple');
module.exports = hangman;