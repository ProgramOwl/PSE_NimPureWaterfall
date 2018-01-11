var gameIsOver = false;
var isPlayer1Turn = true;
var isPlayerVsComputer = false;
var player1Name = "Player 1";
var player2Name = "Player 2";
var currentColumn = -1;

function RowOnePressed(){
    if(currentColumn == -1 || currentColumn == 1) {
        currentColumn = 1;
        document.getElementById('btnRow2').disabled = true;
        document.getElementById('btnRow3').disabled = true;
        document.getElementById('btnRow4').disabled = true;
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(1);
        matches[0].style.visibility = hidden;
        matches.splice(0,1);
    }
}

function RowTwoPressed(){
    if(currentColumn == -1 || currentColumn == 2) {
        currentColumn = 2;
        document.getElementById('btnRow1').disabled = true;
        document.getElementById('btnRow3').disabled = true;
        document.getElementById('btnRow4').disabled = true;
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(2);
        matches[0].style.visibility = hidden;
        matches.splice(0,1);
    }
}

function RowThreePressed(){
    if(currentColumn == -1 || currentColumn == 3) {
        currentColumn = 3;
        document.getElementById('btnRow2').disabled = true;
        document.getElementById('btnRow1').disabled = true;
        document.getElementById('btnRow4').disabled = true;
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(3);
        matches[0].style.visibility = hidden;
        matches.splice(0,1);
    }
}

function RowFourPressed(){
    if(currentColumn == -1 || currentColumn == 4) {
        currentColumn = 4;
        document.getElementById('btnRow2').disabled = true;
        document.getElementById('btnRow3').disabled = true;
        document.getElementById('btnRow1').disabled = true;
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(4);
        matches[0].style.visibility = hidden;
        matches.splice(0,1);
    }
}

function EndTurnPressed(){
    document.getElementById('btnEndTurn').disabled = true;
    currentColumn = -1;
    if(!gameIsOver()){
        if(isPlayerVsComputer){
            document.getElementById('lblTurn').innerHTML = "Computer's Turn.";
            TakeComputerTurn();
            document.getElementById('lblTurn').innerHTML = player1Name + "'s turn.";
        } else {
            if(isPlayer1Turn)
                document.getElementById('lblTurn').innerHTML = player1Name + "'s turn.";
            else
                document.getElementById('lblTurn').innerHTML = player2Name + "'s turn.";
            isPlayer1Turn = isPlayer1Turn ? false : true;
        }
    } else {
        document.getElementById('lblTurn').innerHTML = isPlayer1Turn ? player2Name + "Wins!" : player1Name + "Wins!";
    }
}

function GetMatches(row){ //finished
    return document.getElementById('row' + row).children;
}

function TakeComputerTurn(){
    var row = FindRandomValidRow();
    row[0].style.visibility = hidden;
    row.splice(0,1);
}

function FindRandomValidRow(){
    var validChoice = false;
    var row;
    while(!validChoice) {
        var num = Math.floor(Math.random() * Math.floor(4));
        row = GetMatches(num);
        if (row.length > 0) {
            validChoice = true;
        }
    }
    return row;
}

function CheckGameOver(){
    return GetMatches(1).length == 0 &&
           GetMatches(2).length == 0 &&
           GetMatches(3).length == 0 &&
           GetMatches(4).length == 0;
}

function SetUpGame(){
    //set player 1 & 2's names, change computer bool
    document.getElementById('lblTurn').innerHTML = player1Name + "'s turn.";
}

function ConvertLinkToName(link) {
	//It returns the symbol from the hex value preceded by a %.
	var tempS="";
	tempS = link.replace('+', ' ');
	link = tempS.replace(/([%][0-9a-zA-Z][0-9a-zA-Z])/gi, function (n){
		return String.fromCharCode(parseInt(n.substring(1), 16));
    });
	//console.log(link);
	return link;
}
function getUrlVars() {
    var vars = {},
        parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, key, value) {
			value = ConvertLinkToName(value);
            vars[key] = value;
        });
	console.log("var: ", vars);
	return vars;
}
function RetriveFormData() {
    var x = getUrlVars();
	console.log("x: ", x);
}
SetUpGame();
//RetriveFormData();