//  two options
  var correct1 = 4;
  var correct2 = 7;

  var guess = +prompt("Guess the number (1 to 10):");
  // conditions
  if (guess === correct1) {
    alert("🎉 Correct! You guessed one of the right numbers.");
    document.write("You guessed correctly! 😻 The number was " + correct1 + " or " + correct2);
  } else if (guess === correct2) {
    alert("🎉 Correct! You guessed one of the right numbers.");
    document.write("You guessed correctly! 😻 The number was " + correct1 + " or " + correct2);
  } else if(guess > correct1){
    alert("oops! you guessed to high number. But you were about to reach the second correct number.");
    document.write("you guessed to high! number 😥. The correct numbers were " + correct1 + " and " + correct2);
  }
   else if(guess < correct1 ){
    alert("oops! you guessed to low number. But you were about to reach the second correct number.");
    document.write("you guessed to low number 😥. The correct numbers were " + correct1 + " and " + correct2);
  }
  else {
    alert("❌ Wrong guess!");
    document.write("You guessed wrong. The correct numbers were " + correct1 + " and " + correct2);
  }