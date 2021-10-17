let playerName = prompt("Welkom, wat is jouw naam?");
alert("Hey, " + playerName + "!");

let targetNumber = Math.floor(Math.random() * 26);
console.log(targetNumber);
let numTurns = 0;
let heeftGewonnen = false;

while (playerNumber != targetNumber && numTurns < 5) {
    numTurns++
    var playerNumber = prompt("Turn " + numTurns + " Kies een getal tussen de 0 en 25 .. ");

    if (playerNumber == targetNumber) {
        alert("Je hebt het goed geraden!");
        heeftGewonnen = true;
    } else if (playerNumber < targetNumber) {
        alert("Het getal is te laag, probeer het nogmaals");
    } else if (playerNumber > targetNumber) {
        alert("Het getal is te hoog, probeer het nogmaals");
    } else {
        alert("Je hebt geen getal ingevoerd, voer een getal tussen de 0 en 25 in..");
    }
}

if (heeftGewonnen == true) {
    alert("Bedankt " + playerName + " voor het spelen, tot de volgende keer");
} else if (heeftGewonnen == false) {
    alert("Sorry je hebt het maximaal aantal beurten bereikt, bedankt voor het spelen");
}













