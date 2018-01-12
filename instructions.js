function instructions_clicked() {
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
	document.getElementById("infoModal").innerHTML = "The game of Nim is set up by having an x number of rows filled with an x number of matches.\n\nOn a players turn the player will choose a row and remove an x number of matches from that row.\nA player cannot remove matches from multiple rows and cannot remove more than what in the chosen row.\n\nThe player to remove the last match standing loses.";
	
	var span = document.getElementsByClassName("close")[0];
// Get the modal
/*var modal = document.getElementById('instructions');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
	document.getElementById("infoModal").innerHTML = "The game of Nim is set up by having an x number of rows filled with an x number of matches.\n\nOn a players turn the player will choose a row and remove an x number of matches from that row.\nA player cannot remove matches from multiple rows and cannot remove more than what in the chosen row.\n\nThe player to remove the last match standing loses.";
}
*/
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
	//pop-up of the instructions
	//window.alert("The game of Nim is set up by having an x number of rows filled with an x number of matches.\n\nOn a players turn the player will choose a row and remove an x number of matches from that row.\nA player cannot remove matches from multiple rows and cannot remove more than what in the chosen row.\n\nThe player to remove the last match standing loses.");
}