var gameIsOver = false;
var isPlayer1Turn = true;
var isPlayerVsComputer = true;
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
        if(matches.children.length > 0) {
            matches.removeChild(matches.children[0]);
        }
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
        if(matches.children.length > 0) {
            matches.removeChild(matches.children[0]);
        }
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
        if(matches.children.length > 0) {
            matches.removeChild(matches.children[0]);
        }
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
        if(matches.children.length > 0) {
            matches.removeChild(matches.children[0]);
        }
    }
}

function EndTurnPressed(){
    if(!CheckGameOver()){
        console.log("ispvc",isPlayerVsComputer);
        document.getElementById('btnEndTurn').disabled = true;
        document.getElementById('btnRow1').disabled = GetMatches(1).children.length > 0 ? false : true;
        document.getElementById('btnRow2').disabled = GetMatches(2).children.length > 0 ? false : true;
        document.getElementById('btnRow3').disabled = GetMatches(3).children.length > 0 ? false : true;
        document.getElementById('btnRow4').disabled = GetMatches(4).children.length > 0 ? false : true;
        currentColumn = -1;
        if(isPlayerVsComputer){
            document.getElementById('lblTurn').innerHTML = "Computer's Turn.";
            TakeComputerTurn();
        } else {
            if(!isPlayer1Turn)
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
    return document.getElementById('row' + row);
}

function TakeComputerTurn(){
    var row = FindRandomValidRow();
    if(row.children.length > 0) {
        row.removeChild(row.children[0]);
    }
    if(!CheckGameOver()){
        document.getElementById('lblTurn').innerHTML = player1Name + "'s turn.";
    } else {
        document.getElementById('lblTurn').innerHTML = "Computer Wins.";
    }
}

function FindRandomValidRow(){
    var validChoice = false;
    var row;
    while(!validChoice) {
        var num = Math.floor(Math.random() * Math.floor(4)) + 1;
        console.log("num",num);
        row = GetMatches(num);
        console.log("row",row);
        if(row != null){
            if(row.children != null) {
                if (row.children.length > 0) {
                    validChoice = true;
                }
            }
        }
    }
    return row;
}

function CheckGameOver(){
    return GetMatches(1).Children == undefined &&
           GetMatches(2).Children == undefined &&
           GetMatches(3).Children == undefined &&
           GetMatches(4).Children == undefined;
}

function SetUpGame(){
    //set player 1 & 2's names, change computer bool
    document.getElementById('lblTurn').innerHTML = player1Name + "'s turn.";
    document.getElementById('btnEndTurn').disabled = true; 
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