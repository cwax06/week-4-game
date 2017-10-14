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

// Buttons
var button =
    document.createElement("button");
button.innerHTML = crystal.blue.name;

button.addEventListener("click", function () {
    alert("test");
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

    // Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value = getRandom(1, 12)
    crystal.green.value = getRandom(1, 12)
    crystal.red.value = getRandom(1, 12)
    crystal.yellow.value = getRandom(1, 12)

    // Change the HTML to reflect all of these changes

    // Testing Console
    console.log(currentScore)
    console.log(targetScore)
    console.log(crystal)
};

// Scoring
// function scoring() {
//     if (currentScore > targetScore) {
//         lossCount = ++1
//     } else if (currentScore = targetScore) {
//         winCount = ++1
//     };
// };




startGame()