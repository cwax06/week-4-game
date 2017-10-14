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
    console.log(targetScore)

    // Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value = getRandom(1, 12)
    crystal.green.value = getRandom(1, 12)
    crystal.red.value = getRandom(1, 12)
    crystal.yellow.value = getRandom(1, 12)
    console.log(crystal)

    // Change the HTML to reflect all of these changes

    // Testing Console
};

startGame()