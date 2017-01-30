"use strict";

// takes user input into account, either choosing "cloze", "text", and "both" of the basic card (ex: node BasicCard.js front)
var input = process.argv;
var side = input[2];

// functionCard is a constructor with the two arguments of text and cloze
function clozeCard (text, cloze) {
	if(!(this instanceof clozeCard)) {
		return new clozeCard (text, cloze);
	}

	this.text = text;
	this.cloze = cloze;

	var replace = this.text.replace(this.cloze, "...");

	// if user inputs "cloze", the user will be shown the cloze which contains the missing word
	if (side === "cloze") {
		console.log("Cloze: " + replace);
	}
	// if the user inputs "text", the user will be shown the text with the missing word answered
	else if (side === "text") {
		console.log("Text: " + this.text);
	}
	// if the user inputs "both", the user will be shown both sides of the card which contains the cloze and the text
	else if (side === "both") {
		console.log("Cloze: " + replace);
		console.log("Text: " + this.text);
	}
	// if the side is not recognized, it will let the user know
	else {
		console.log("Error: Input not recognized");
	}
}

// variable for the card that returns the newly created object that inherits from the constructor
var narwhal = new clozeCard ("Narwhals are the Jedi of the sea", "Narwhals");

