<?php

$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "I'm going to think of numbers between 1 and 10 (inclusive). Do you think you can guess correctly?\n";

function guessNumber(){
    global $guess_high, $guess_low, $correct_guesses, $play_count;

    $play_count++;
    $rand = rand(1,10);

    echo "\nMake your guess...\n";

    $guess = intval(readline("<<"));

    echo "\nRound: $play_count\n";
    echo "\nNumber: $rand\n";
    echo "\nYour Guess: $guess";

    if ($guess === $rand){
        $correct_guesses++;
    } elseif ($guess > $guess_high) {
        $guess_high++;
    } else {
        $guess_low++;
    }
}

guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();

$percentRight = $correct_guesses / $play_count;
echo "You were right $percentRight% of the time";

if ($guess_high > $guess_low) {
    echo "When you guessed wrong, you tended to guess high.";
} else {
    echo "When you guessed wrong, you tended to guess low.";
}