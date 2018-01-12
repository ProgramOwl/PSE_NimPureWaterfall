//Radio Listeners
function gameTypeChosen() {	
	document.getElementById("gameType_PvP").onclick = function () {//make second text box visible
		//document.getElementById("player2").style.visibility = "visible";		
		document.getElementById("player2").style.display = "block";
		//console.log("visible");
	};
	document.getElementById("gameType_PvC").onclick = function () {//make second text box invisible
		//document.getElementById("player2").style.visibility = "collapse";		
		document.getElementById("player2").style.display = "none";
		//console.log("hidden");
	};
	document.getElementById("player2").style.display = "none";
	if(document.getElementById("gameType_PvP").checked){
	document.getElementById("player2").style.display = "block";
	}
}
//variables
var name1, name2, isPvP, linkS;
//Checks
function isNameValid(name) {
	var isValid = false;
	//check name is neither null nor just white space
	if (name) {
		var regex = /\S/;
		if(regex.test(name)){
			isValid = true;
		}
	}
	//console.log(name+": "+isValid);
	return isValid;
}
//Conversions
function ConvertNameToLink(name) {
	//It returns the symbols hex value preceded by a %.
	var tempS = "";
	// /[^a-z\d\s]/gi or /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/gi
	tempS = name.replace(/[^a-z\d\s]/gi, function (n) {
		//return String.fromCharCode(parseInt(n.substring(1), 16));
		return "%" + ((n.charCodeAt(0)).toString(16));
    });
	name = tempS.replace(/\s{1,}/g, '+');
	//console.log(name);
	return name;
}
//Process
function onSubmit() {
    name1 = document.getElementById("player1Name").value;
    name2 = "Computer";
	isPvP = document.getElementById("gameType_PvP").checked;
    linkS = "?c=" + (isPvP ? "f" : "t");
	name1 = (isNameValid(name1)) ? name1 : "Player 1";
	
    if (isPvP) {
	    name2 = document.getElementById("player2Name").value;
		name2 = (isNameValid(name2)) ? name2 : "Player 2";
    }
	
    linkS = linkS + "&p1=" + ConvertNameToLink(name1) + "&p2=" + ConvertNameToLink(name2);
    directToGame(linkS);
	return false;
}

function directToGame(linkAddress) {
    var diff = document.getElementById("categories").value;
	console.log("diff: ", diff);
    if (diff === "Easy") {
     window.location = "easy.html"+linkAddress;
		//console.log("Easy:",linkAddress);
    } else if (diff === "Medium") {
     window.location = "medium.html"+linkAddress;		
		//console.log("Medium:",linkAddress);
    } else if (diff === "Hard") {
     window.location = "hard.html"+linkAddress;
		//console.log("Hard:",linkAddress);
    }
}

window.addEventListener("onload",gameTypeChosen());