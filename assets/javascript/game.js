// GLOBAL VARIABLES
// =======================================================

// Crystal Variables
var crystal = {
    blue:
    {
        name: "blue",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    red:
    {
        name: "red",
        value: 0
    },
    yellow:
    {
        name: "yellow",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

$(document).ready(function () {
    startGame()
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Whenever it is clicked...
    $("#click-me").on("click", function () {

        // ... we trigger an alert.
        alert("I've been clicked!");
    });

    // Buttons
    var blueClick =
        document.getElementById("blueCrystal");
    blueClick.addEventListener("click", function () {
        currentScore += crystal.blue.value
        document.getElementById("current").innerText = currentScore;
    });

    var redClick =
        document.getElementById("redCrystal");
    redClick.addEventListener("click", function () {
        currentScore += crystal.red.value
        document.getElementById("current").innerText = currentScore;
    });

    var greenClick =
        document.getElementById("greenCrystal");
    greenClick.addEventListener("click", function () {
        currentScore += crystal.green.value
        document.getElementById("current").innerText = currentScore;
    });

    var yellowClick =
        document.getElementById("yellowCrystal");
    yellowClick.addEventListener("click", function () {
        currentScore += crystal.yellow.value
        document.getElementById("current").innerText = currentScore;
    });

});




// FUNCTIONS
// ======================================================

// Helper Function for getting random numbers

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Starts the Game (and restarts the game)
function startGame() {


    // Reset the Current Score
    currentScore = 0;
    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120)
    document.getElementById("targetSpan").innerText = targetScore;
    document.getElementById("current").innerText = currentScore;

    // Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value = getRandom(1, 12)
    crystal.green.value = getRandom(1, 12)
    crystal.red.value = getRandom(1, 12)
    crystal.yellow.value = getRandom(1, 12)
    // crystal.[].value = getRandom(1, 12)

    // Change the HTML to reflect all of these changes

    // Testing Console
    console.log(currentScore)
    console.log(targetScore)
    console.log(crystal)
};

// function checkScore()

// Scoring
// function scoring() {
//     if (currentScore > targetScore) {
//         lossCount = ++1
//     } else if (currentScore = targetScore) {
//         winCount = ++1
//     };
// };




