var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("1 " + firstPresident.front); 

// "George Washington"
console.log("2 " + firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
console.log("3 " + firstPresidentCloze);

firstPresidentCloze.removeCloze();
// "George Washington"
console.log("4 " + firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log("5 " + firstPresidentCloze.clozedText); 

// "George Washington was the first president of the United States.

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");