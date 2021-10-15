let targetNumber = Math.floor(Math.random() * 26);
console.log(targetNumber);

let playerName = prompt("Welkom, wat is jouw naam?");

alert("Hey, " + playerName + "!");

let playerNumber = prompt("Voer een getal in van 0 tot 25 om te beginnen met raden..");

if (playerNumber < targetNumber) {
    window.prompt("Je hebt een te laag getal ingevoerd, probeer het nogmaals");
} else if (playerNumber > targetNumber) {
    window.prompt("Je hebt een te hoog getal ingevoerd, probeer het nogmaals");
} else if (isNaN(playerNumber)) {
    window.prompt("Je hebt geen getal ingevoerd, probeer het nogmaals");
} else (playerNumber == targetNumber)
window.alert("Je hebt het goed geraden! Het spel is nu klaar..");



