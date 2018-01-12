function instructions_clicked() {
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
	document.getElementById("infoModal").innerHTML = "The game of Nim is set up by having an x number of rows filled with an x number of matches.<br/><br/>On a players turn the player will choose a row and remove an x number of matches from that row.<br/>A player cannot remove matches from multiple rows and cannot remove more than what in the chosen row.<br/><br/>The player to remove the last match standing loses.";//&nbsp;
	
	var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}