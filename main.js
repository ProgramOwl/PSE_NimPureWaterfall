
var gameIsOver = false;
var isPlayer1Turn = true;
var isPlayerVsComputer = true;
var player1Name = "Player 1";
var player2Name = "Player 2";
var currentColumn = -1;

function RowOnePressed(){
    if(currentColumn == -1 || currentColumn == 1) {
        currentColumn = 1;
		document.getElementById('btnEndTurn').style.display = "block";
        document.getElementById('btnRow2').disabled = true;

        if(document.getElementById('btnRow3')){
			document.getElementById('btnRow3').disabled = true;}
        if(document.getElementById('btnRow4')){
			document.getElementById('btnRow4').disabled = true;}
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(1);

        if(matches.children.length > 1) {
            matches.removeChild(matches.children[0]);
        }
		CheckGameOver();
    }
}

function RowTwoPressed(){
    if(currentColumn == -1 || currentColumn == 2) {
        currentColumn = 2;
		document.getElementById('btnEndTurn').style.display = "block";
        document.getElementById('btnRow1').disabled = true;

        if(document.getElementById('btnRow3')){
			document.getElementById('btnRow3').disabled = true;}
        if(document.getElementById('btnRow4')){
			document.getElementById('btnRow4').disabled = true;}
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(2);

        if(matches.children.length > 1) {
            matches.removeChild(matches.children[0]);
        }
		CheckGameOver();
    }
}

function RowThreePressed(){
    if(currentColumn == -1 || currentColumn == 3) {
        currentColumn = 3;
		document.getElementById('btnEndTurn').style.display = "block";
        document.getElementById('btnRow2').disabled = true;
        document.getElementById('btnRow1').disabled = true;

        if(document.getElementById('btnRow4')){
			document.getElementById('btnRow4').disabled = true;}
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(3);

        if(matches.children.length > 1) {
            matches.removeChild(matches.children[0]);
        }
		CheckGameOver();
    }
}

function RowFourPressed(){
    if(currentColumn == -1 || currentColumn == 4) {
        currentColumn = 4;
		document.getElementById('btnEndTurn').style.display = "block";
        document.getElementById('btnRow2').disabled = true;
        document.getElementById('btnRow3').disabled = true;
        document.getElementById('btnRow1').disabled = true;
        document.getElementById('btnEndTurn').disabled = false; 
        var matches = GetMatches(4);

        if(matches.children.length > 1) {
            matches.removeChild(matches.children[0]);
        }
		CheckGameOver();
    }
}

function EndTurnPressed(){
		isPlayer1Turn = !isPlayer1Turn;
	document.getElementById('btnEndTurn').style.display = "none";
    //if(!CheckGameOver()){
        console.log("ispvc: ",isPlayerVsComputer);
		console.log("isPlayer1Turn: ",isPlayer1Turn);
        document.getElementById('btnEndTurn').disabled = true;
        
        document.getElementById('btnRow1').disabled = GetMatches(1).children.length > 1 ? false : true;
        document.getElementById('btnRow2').disabled = GetMatches(2).children.length > 1 ? false : true;
        if(document.getElementById('btnRow3')){
			document.getElementById('btnRow3').disabled = GetMatches(3).children.length > 1 ? false : true;
		}
        if(document.getElementById('btnRow4')){
			document.getElementById('btnRow4').disabled = GetMatches(4).children.length > 1 ? false : true;
		}        
        currentColumn = -1;
        
		if(isPlayer1Turn){
			document.getElementById('lblTurn').innerHTML = player1Name + "'s Turn";
		}
		else{
			document.getElementById('lblTurn').innerHTML = player2Name + "'s Turn";
			if(isPlayerVsComputer){
				TakeComputerTurn();
				//window.
			}
		}
    //}
}

function GetMatches(row){ //finished
    return document.getElementById('row' + row);
}

function TakeComputerTurn(){
    var row = FindRandomValidRow();
    if(row.children.length > 1) {
		var amount = Math.floor(Math.random()*(row.children.length-2))+1;
		console.log("Amount = ", amount);
		for(var i=0; i<amount; i++){
        	row.removeChild(row.children[0]);
		}
    }
	if(!CheckGameOver()){
	EndTurnPressed();
	}
}

function FindRandomValidRow(){
	var expected = 2;
	if(document.getElementById('btnRow3')){
		expected=3;
	}
	if(document.getElementById('btnRow4')){
		expected=4;
	}
    var validChoice = false;
    var row;
    while(!validChoice) {
        var num = Math.floor(Math.random() *expected) + 1;
        console.log("num",num);
        row = GetMatches(num);
        console.log("row",row);
        if(row != null){
            if(row.children != null) {
                if (row.children.length > 1) {
                    validChoice = true;
                }
            }
        }
    }
    return row;
}

function CheckGameOver(){
	var total = 0;
	var expected = 2;
	total +=GetMatches(1).children.length;
	total +=GetMatches(2).children.length;
	if(document.getElementById('btnRow3')){
	total +=GetMatches(3).children.length;
		expected=3;
	}
        if(document.getElementById('btnRow4')){
	total +=GetMatches(4).children.length;
			expected=4;
		}
	console.log("total:", total,", expected:", expected);
	if(total === expected){
		document.getElementById('lblTurn').innerHTML = isPlayer1Turn ? player2Name + " Wins!" : player1Name + " Wins!";
        document.getElementById('btnRow1').disabled = true;
		document.getElementById('btnRow2').disabled = true;
        if(document.getElementById('btnRow3')){
			document.getElementById('btnRow3').disabled = true;}
        if(document.getElementById('btnRow4')){
			document.getElementById('btnRow4').disabled = true;}
	document.getElementById('btnEndTurn').style.display = "none";
	}
    return total === expected;
}

function ConvertLinkToName(link) {
	//It returns the symbol from the hex value preceded by a %.
	var tempS="";
	tempS = link.replace(/[+]{1,}/g, ' ');
	link = tempS.replace(/([%][0-9a-z][0-9a-z])/gi, function (n){
		return String.fromCharCode(parseInt(n.substring(1), 16));
    });
	//console.log(link);
	return link;
}

function SetUpGame(){
    //set player 1 & 2's names, change computer bool
	var vars = {},
        parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, key, value) {
			value = ConvertLinkToName(value);
            vars[key] = value;
        });
	//console.log("var: ", vars);
	isPlayerVsComputer = (vars["c"])? vars["c"]=="t": true;
	player1Name = (vars["p1"])? vars["p1"]: "Player 1";
	player2Name = (vars["p2"])? vars["p2"]: (isPlayerVsComputer)? "Computer": "Player 2";
	//console.log(isPlayerVsComputer,player1Name,player2Name);
	//RetriveUrlData();
    document.getElementById('lblTurn').innerHTML = player1Name + "'s Turn";
    document.getElementById('btnEndTurn').disabled = true; 
}

SetUpGame();