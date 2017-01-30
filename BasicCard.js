"use strict";

// takes user input into account, either choosing "front" or "back" of the basic card (ex: node BasicCard.js front)
var input = process.argv;
var side = input[2];

// function basicCard is a constructor with the two arguments of front and back
function basicCard (front, back) {
	if(!(this instanceof basicCard)) {
		return new basicCard (front, back);
	}

	this.front = front;
	this.back = back;

	this.showFront = function() {
		return this.front;
	}

	this.showBack = function() {
		return this.back;
	}
}

// variable for the card that returns a newly created object that inheries from the constructor's 
var gWashington = new basicCard("Who was the first president of the United States?", "George Washington");

// if user inputs "front", the user will be shown the front of the card which contains the question
if (side === "front") {
	console.log("Question: " + gWashington.showFront());
}
// if the user inputs "back", the user will be shown the back of the card which contains the answer
else if (side === "back") {
	console.log("Answer: " + gWashington.showBack());
}
// if the user inputs "both", the user will be shown both sides of the card which contains the question and the answer
else if (side === "both") {
	console.log("Question: " + gWashington.showFront());
	console.log("Answer: " + gWashington.showBack());
}
// if the side is not recognized, it will let the user know
else {
	console.log("Error: Side not recognized");
}
