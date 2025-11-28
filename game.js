// create a new empty array to hold the user's pattern
var userClickedPattern = [];

// create a new empty array to hold the game pattern
var gamePattern = [];

var level = 0;
var started = false;  // Track if game has started

//a new array to hold the button colours
buttonColours = ["red", "blue", "green", "yellow"];

$(document).keypress(function () {
    if (!started) {
        // First keypress - start the game
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Create the nextSequence function
function nextSequence() {
    userClickedPattern = [];
    level++;  // Increase level by 1
    $("#level-title").text("Level " + level);  // Update level title
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Play sound and animate the button for the sequence
    playSound(randomChosenColour);      // Plays sound
    animatePress(randomChosenColour);   // Flashes button
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Create a function to animate the button press
function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    // Check if the most recent answer matches the game pattern
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        // Check if user has completed the full sequence
        if (userClickedPattern.length === gamePattern.length) {
            // User completed the sequence correctly!
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");

        // Play wrong sound
        playSound("wrong");

        // Apply game-over flash effect to body
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Update title to show game over message
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Reset the game
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);       // Plays sound
    animatePress(userChosenColour);    // Flashes button
    checkAnswer(userClickedPattern.length - 1); // Check answer
});


