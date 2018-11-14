// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = $(".userChoice").val();
var computerChoice = $(".computerChoice").val();
var winner = $("winner").val();
var randomNumber = 0;

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    Math.random(randomNumber);
});
