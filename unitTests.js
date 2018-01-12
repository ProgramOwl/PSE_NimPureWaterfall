function UTRowOneClickedDisablesButtons(){
    Reset();
    RowOnePressed();

    if(document.getElementById('btnRow2').disabled == true &&
       document.getElementById('btnRow3').disabled == true &&
       document.getElementById('btnRow4').disabled == true &&
       document.getElementById('btnEndTurn').disabled == false){
           DisplayResult(true,"UTRowOneClickedDisablesButtons");
    } else {
        DisplayResult(false,"UTRowOneClickedDisablesButtons");
    }
}
UTRowOneClickedDisablesButtons();
function UTRowOneClickedSetsCurrentColumn(){
    Reset();
    RowOnePressed();
    if(currentColumn == 1)
        DisplayResult(true,"UTRowOneClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowOneClickedSetsCurrentColumn");
}
UTRowOneClickedSetsCurrentColumn();
function UTRowOneClickedRemovesAChild(){
    Reset();
    var initalLength = GetMatches(1).children.length;
    RowOnePressed();
    var endLength = GetMatches(1).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowOneClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowOneClickedRemovesAChild");
}
UTRowOneClickedRemovesAChild();
function UTRowTwoClickedDisablesButtons(){
    Reset();
    RowTwoPressed();
    if(document.getElementById('btnRow1').disabled == true &&
        document.getElementById('btnRow3').disabled == true &&
        document.getElementById('btnRow4').disabled == true &&
        document.getElementById('btnEndTurn').disabled == false){
            DisplayResult(true,"UTRowTwoClickedDisablesButtons");
    } else {
        DisplayResult(false,"UTRowTwoClickedDisablesButtons");
    }
}
UTRowTwoClickedDisablesButtons();
function UTRowTwoClickedSetsCurrentColumn(){
    Reset();
    RowTwoPressed();
    if(currentColumn == 2)
        DisplayResult(true,"UTRowTwoClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowTwoClickedSetsCurrentColumn");
}
UTRowTwoClickedSetsCurrentColumn();
function UTRowTwoClickedRemovesAChild(){
    Reset();
    var initalLength = GetMatches(2).children.length;
    RowTwoPressed();
    var endLength = GetMatches(2).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowTwoClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowTwoClickedRemovesAChild");
}
UTRowTwoClickedRemovesAChild();
function UTRowThreeClickedDisablesButtons(){
    Reset();
    RowThreePressed();
    if(document.getElementById('btnRow1').disabled == true &&
        document.getElementById('btnRow2').disabled == true &&
        document.getElementById('btnRow4').disabled == true &&
        document.getElementById('btnEndTurn').disabled == false){
            DisplayResult(true,"UTRowThreeClickedDisablesButtons");
    } else {
        DisplayResult(false,"UTRowThreeClickedDisablesButtons");
    }
}
UTRowThreeClickedDisablesButtons();
function UTRowThreeClickedSetsCurrentColumn(){
    Reset();
    RowThreePressed();
    if(currentColumn == 3)
        DisplayResult(true,"UTRowThreeClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowThreeClickedSetsCurrentColumn");
}
UTRowThreeClickedSetsCurrentColumn();
function UTRowThreeClickedRemovesAChild(){
    Reset();
    var initalLength = GetMatches(3).children.length;
    RowThreePressed();
    var endLength = GetMatches(3).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowThreeClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowThreeClickedRemovesAChild");
}
UTRowThreeClickedRemovesAChild();
function UTRowFourClickedDisablesButtons(){
    Reset();
    RowFourPressed();
    if(document.getElementById('btnRow1').disabled == true &&
        document.getElementById('btnRow2').disabled == true &&
        document.getElementById('btnRow3').disabled == true &&
        document.getElementById('btnEndTurn').disabled == false){
            DisplayResult(true,"UTRowFourClickedDisablesButtons");
    } else {
        DisplayResult(false,"UTRowFourClickedDisablesButtons");
    }
}
UTRowFourClickedDisablesButtons();
function UTRowFourClickedSetsCurrentColumn(){
    Reset();
    RowFourPressed();
    if(currentColumn == 4)
        DisplayResult(true,"UTRowFourClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowFourClickedSetsCurrentColumn");
}
UTRowFourClickedSetsCurrentColumn();
function UTRowFourClickedRemovesAChild(){
    Reset();
    var initalLength = GetMatches(4).children.length;
    RowFourPressed();
    var endLength = GetMatches(4).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowFourClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowFourClickedRemovesAChild");
}
UTRowFourClickedRemovesAChild();
function UTEndTurnButtonWithComputerAndComputerWins(){
    Reset();
    isPlayerVsComputer = true;
    isPlayer1Turn = true;
    RemoveAllMatches();
    CheckGameOver();
    if(document.getElementById("lblTurn").innerText == player2Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithComputerAndComputerWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithComputerAndComputerWins");
}
UTEndTurnButtonWithComputerAndComputerWins();
function UTEndTurnButtonWithComputerAndPlayerWins(){
    Reset();
    isPlayerVsComputer = true;
    isPlayer1Turn = false;
    RemoveAllMatches();
    CheckGameOver();
    if(document.getElementById("lblTurn").innerText == player1Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithComputerAndPlayerWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithComputerAndPlayerWins");
}
UTEndTurnButtonWithComputerAndPlayerWins();
function UTEndTurnButtonWithComputerAndNoOneWins(){
    Reset();
    isPlayerVsComputer = true;
    isPlayer1Turn = true;
    document.getElementById("lblTurn").innerText = player1Name + "'s Turn";
    CheckGameOver();
    if(document.getElementById("lblTurn").innerText == player1Name + "'s Turn")
        DisplayResult(true,"UTEndTurnButtonWithComputerAndNoOneWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithComputerAndNoOneWins");
}
UTEndTurnButtonWithComputerAndNoOneWins();
function UTEndTurnButtonWithPlayerAndPlayer1Wins(){
    Reset();
    isPlayerVsComputer = false;
    isPlayer1Turn = false;
    RemoveAllMatches();
    CheckGameOver();
    if(document.getElementById("lblTurn").innerText == player1Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithPlayerAndPlayer1Wins");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerAndPlayer1Wins");
}
UTEndTurnButtonWithPlayerAndPlayer1Wins();
function UTEndTurnButtonWithPlayerAndPlayer2Wins(){
    Reset();
    isPlayerVsComputer = false;
    isPlayer1Turn = true;
    RemoveAllMatches();
    CheckGameOver();
    if(document.getElementById("lblTurn").innerText == player2Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithPlayerAndPlayer2Wins");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerAndPlayer2Wins");
}
UTEndTurnButtonWithPlayerAndPlayer2Wins();
function UTEndTurnButtonWithPlayerAndNoOneWins(){
    Reset();
    isPlayerVsComputer = false;
    isPlayer1Turn = true;
    var beginMatchCount = GetMatchCount();
    document.getElementById("row2").removeChild(document.getElementById("row2").children[0]);
    CheckGameOver();
    var endMatchCount = GetMatchCount();
    if(endMatchCount < beginMatchCount)
        DisplayResult(true,"UTEndTurnButtonWithPlayerAndNoOneWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerAndNoOneWins");
}
UTEndTurnButtonWithPlayerAndNoOneWins();
function UTEndTurnButtonWithPlayerBeingSwitched(){
    Reset();
    isPlayerVsComputer = false;
    isPlayer1Turn = true;
    document.getElementById("lblTurn").innerText = player1Name + "'s Turn";
    EndTurnPressed();
    if(document.getElementById("lblTurn").innerText == player2Name + "'s Turn")
        DisplayResult(true,"UTEndTurnButtonWithPlayerBeingSwitched");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerBeingSwitched");
}
UTEndTurnButtonWithPlayerBeingSwitched();
function UTGetMatchesWithValidRow(){
    Reset();
    var row = GetMatches(2);
    if(row.children.length > 1)
        DisplayResult(true,"UTGetMatchesWithValidRow");
    else
        DisplayResult(false,"UTGetMatchesWithValidRow");
}
UTGetMatchesWithValidRow();
function UTGetMatchesWithInvalidRow(){
    Reset();
    RemoveAllMatches();
    var row = GetMatches(1);
    if(row.children.length == 1)
        DisplayResult(true,"UTGetMatchesWithInvalidRow");
    else
        DisplayResult(false,"UTGetMatchesWithInvalidRow");
}
UTGetMatchesWithInvalidRow();
function UTComputerTurnOneChildRemoved(){
    Reset();
    isPlayerVsComputer = true;
    isPlayer1Turn = false;
    var beginMatchCount = GetMatchCount();
    TakeComputerTurn();
    var endMatchCount = GetMatchCount();
    if(endMatchCount < beginMatchCount)
        DisplayResult(true,"UTComputerTurnOneChildRemoved");
    else
        DisplayResult(false,"UTComputerTurnOneChildRemoved");
}
UTComputerTurnOneChildRemoved();
function UTFindRandomValidRowReturnsValidRow(){
    Reset();
    var row = FindRandomValidRow();
    if(row != undefined)
        DisplayResult(true,"UTFindRandomValidRowReturnsValidRow");
    else
        DisplayResult(false,"UTFindRandomValidRowReturnsValidRow");
}
UTFindRandomValidRowReturnsValidRow();
function UTCheckGameOverWithGameOver(){
    Reset();
    RemoveAllMatches();
    var isGameOver = CheckGameOver();
    if(isGameOver)
        DisplayResult(true,"UTCheckGameOverWithGameOver");
    else
        DisplayResult(false,"UTCheckGameOverWithGameOver");
}
UTCheckGameOverWithGameOver();
function UTCheckGameOverWithNoGameOver(){
    Reset();
    var isGameOver = CheckGameOver();
    if(!isGameOver)
        DisplayResult(true,"UTCheckGameOverWithNoGameOver");
    else
        DisplayResult(false,"UTCheckGameOverWithNoGameOver");
}
UTCheckGameOverWithNoGameOver();

// UNIT TEST HELPER FUNCTIONS \\
function DisplayResult(pass,functionName){
    if(pass)
        console.log("[PASSED] " + functionName);
    else
        console.log("[FAILED] " + functionName);
}
function RemoveAllBut1Matches(){
    document.getElementById("row1").removeChild(document.getElementById("row1").children[0]);
    for(var i = 0;i < 3;i++)
        document.getElementById("row2").removeChild(document.getElementById("row2").children[0]);

    if(document.getElementById("row3")) {
        for(var i = 0;i < 8;i++)
            document.getElementById("row3").removeChild(document.getElementById("row3").children[0]);
    }

    if(document.getElementById("row4")) {
        for(var i = 0;i < 9;i++)
            document.getElementById("row4").removeChild(document.getElementById("row4").children[0]);
    }
}
function RemoveAllMatches(){
    document.getElementById("row1").removeChild(document.getElementById("row1").children[0]);
    RemoveAllBut1Matches();
}
function GetMatchCount() {
    return (document.getElementById("row1").children.length - 1) +
            (document.getElementById("row2").children.length - 1) +
            (document.getElementById("row3").children.length - 1) +
            (document.getElementById("row4").children.length - 1);
}
function Reset(){
    gameIsOver = false;
    isPlayer1Turn = true;
    isPlayerVsComputer = true;
    player1Name = "Player 1";
    player2Name = "Player 2";
    currentColumn = -1;

    document.getElementById('btnEndTurn').style.display = "none";
    document.getElementById('btnRow1').disabled = false;
    document.getElementById('btnRow2').disabled = false;
    document.getElementById('btnRow3').disabled = false;
    document.getElementById('btnRow4').disabled = false;
    var invalid = true;
    while(invalid){
        if(document.getElementById("row1").children.length == 3){
            invalid = false;
        } else {
            var newMatch = document.createElement('div');
            newMatch.className = "match";
            document.getElementById("row1").insertBefore(newMatch,document.getElementById("row1").children[0]);
        }
    }
    invalid = true;
    while(invalid){
        if(document.getElementById("row2").children.length == 4){
            invalid = false;
        } else {
            var newMatch = document.createElement('div');
            newMatch.className = "match";
            document.getElementById("row2").insertBefore(newMatch,document.getElementById("row2").children[0]);
        }
    }
    invalid = true;
    while(invalid){
        if(document.getElementById("row3").children.length == 9){
            invalid = false;
        } else {
            var newMatch = document.createElement('div');
            newMatch.className = "match";
            document.getElementById("row3").insertBefore(newMatch,document.getElementById("row3").children[0]);
        }
    }
    invalid = true;
    while(invalid){
        if(document.getElementById("row4").children.length == 10){
            invalid = false;
        } else {
            var newMatch = document.createElement('div');
            newMatch.className = "match";
            document.getElementById("row4").insertBefore(newMatch,document.getElementById("row4").children[0]);
        }
    }
}
Reset();