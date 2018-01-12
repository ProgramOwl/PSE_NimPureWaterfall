function UTRowOneClickedDisablesButtons(){
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
function UTRowOneClickedSetsCurrentColumn(){
    RowOnePressed();
    if(currentColumn == 1)
        DisplayResult(true,"UTRowOneClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowOneClickedSetsCurrentColumn");
}
function UTRowOneClickedRemovesAChild(){
    var initalLength = GetMatches(1).children.length;
    RowOnePressed();
    var endLength = GetMatches(1).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowOneClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowOneClickedRemovesAChild");
}
function UTRowTwoClickedDisablesButtons(){
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
function UTRowTwoClickedSetsCurrentColumn(){
    RowTwoPressed();
    if(currentColumn == 2)
        DisplayResult(true,"UTRowTwoClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowTwoClickedSetsCurrentColumn");
}
function UTRowTwoClickedRemovesAChild(){
    var initalLength = GetMatches(2).children.length;
    RowTwoPressed();
    var endLength = GetMatches(2).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowTwoClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowTwoClickedRemovesAChild");
}
function UTRowThreeClickedDisablesButtons(){
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
function UTRowThreeClickedSetsCurrentColumn(){
    RowThreePressed();
    if(currentColumn == 3)
        DisplayResult(true,"UTRowThreeClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowThreeClickedSetsCurrentColumn");
}
function UTRowThreeClickedRemovesAChild(){
    var initalLength = GetMatches(3).children.length;
    RowThreePressed();
    var endLength = GetMatches(3).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowThreeClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowThreeClickedRemovesAChild");
}
function UTRowFourClickedDisablesButtons(){
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
function UTRowFourClickedSetsCurrentColumn(){
    RowFourPressed();
    if(currentColumn == 4)
        DisplayResult(true,"UTRowFourClickedSetsCurrentColumn");
    else
        DisplayResult(false,"UTRowFourClickedSetsCurrentColumn");
}
function UTRowFourClickedRemovesAChild(){
    var initalLength = GetMatches(4).children.length;
    RowFourPressed();
    var endLength = GetMatches(4).children.length;
    if (endLength == initalLength - 1)
        DisplayResult(true,"UTRowFourClickedRemovesAChild");
    else
        DisplayResult(false,"UTRowFourClickedRemovesAChild");
}
function UTEndTurnButtonWithComputerAndComputerWins(){
    isPlayerVsComputer = true;
    isPlayer1Turn = true;
    RemoveAllMatches();
    EndTurnPressed();
    if(document.getElementById("lblTurn").innerText == player2Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithComputerAndComputerWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithComputerAndComputerWins");
}
function UTEndTurnButtonWithComputerAndPlayerWins(){
    isPlayerVsComputer = true;
    isPlayer1Turn = true;
    RemoveAllBut1Matches();
    EndTurnPressed();
    if(document.getElementById("lblTurn").innerText == player1Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithComputerAndPlayerWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithComputerAndPlayerWins");
}
function UTEndTurnButtonWithComputerAndNoOneWins(){
    isPlayerVsComputer = true;
    isPlayer1Turn = true;
    var beginMatchCount = GetMatchCount();
    EndTurnPressed();
    var endMatchCount = GetMatchCount();
    if(endMatchCount < beginMatchCount)
        DisplayResult(true,"UTEndTurnButtonWithComputerAndNoOneWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithComputerAndNoOneWins");
}
function UTEndTurnButtonWithPlayerAndPlayer1Wins(){
    isPlayerVsComputer = false;
    isPlayer1Turn = false;
    RemoveAllBut1Matches();
    EndTurnPressed();
    if(document.getElementById("lblTurn").innerText == player1Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithPlayerAndPlayer1Wins");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerAndPlayer1Wins");
}
function UTEndTurnButtonWithPlayerAndPlayer2Wins(){
    isPlayerVsComputer = false;
    isPlayer1Turn = true;
    RemoveAllBut1Matches();
    EndTurnPressed();
    if(document.getElementById("lblTurn").innerText == player2Name + " Wins!")
        DisplayResult(true,"UTEndTurnButtonWithPlayerAndPlayer2Wins");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerAndPlayer2Wins");
}
function UTEndTurnButtonWithPlayerAndNoOneWins(){
    isPlayerVsComputer = false;
    isPlayer1Turn = true;
    var beginMatchCount = GetMatchCount();
    document.getElementById("row2").removeChild(document.getElementById("row1").children[0]);
    EndTurnPressed();
    var endMatchCount = GetMatchCount();
    if(endMatchCount < beginMatchCount)
        DisplayResult(true,"UTEndTurnButtonWithPlayerAndNoOneWins");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerAndNoOneWins");
}
function UTEndTurnButtonWithPlayerBeingSwitched(){
    isPlayerVsComputer = false;
    isPlayer1Turn = true;
    document.getElementById("lblTurn").innerText = player1Name + "'s Turn";
    EndTurnPressed();
    if(document.getElementById("lblTurn").innerText == player2Name + "'s Turn")
        DisplayResult(true,"UTEndTurnButtonWithPlayerBeingSwitched");
    else
        DisplayResult(false,"UTEndTurnButtonWithPlayerBeingSwitched");
}
function UTGetMatchesWithValidRow(){
    var row = GetMatches(2);
    if(row.children.length > 1)
        DisplayResult(true,"UTGetMatchesWithValidRow");
    else
        DisplayResult(false,"UTGetMatchesWithValidRow");
}
function UTGetMatchesWithInvalidRow(){
    RemoveAllMatches();
    var row = GetMatches(1);
    if(row.children.length == 1)
        DisplayResult(true,"UTGetMatchesWithInvalidRow");
    else
        DisplayResult(false,"UTGetMatchesWithInvalidRow");
}
function UTComputerTurnOneChildRemoved(){
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
function UTComputerTurnDisabledButtons(){
    isPlayerVsComputer = true;
    isPlayer1Turn = false;
    TakeComputerTurn();
    var disabledCorrectly = document.getElementById('btnRow1').disabled &&
                    document.getElementById('btnRow2').disabled;
    
    if(document.getElementById('btnRow3')){
        if(!document.getElementById('btnRow3').disabled) {
            disabledCorrectly = false;
        }
    }
    if(document.getElementById('btnRow4')){
        if(!document.getElementById('btnRow4').disabled) {
            disabledCorrectly = false;
        }
    }    
    if(disabledCorrectly)
        DisplayResult(true,"UTComputerTurnDisabledButtons");
    else
        DisplayResult(false,"UTComputerTurnDisabledButtons");
}
function UTFindRandomValidRowReturnsValidRow(){
    var row = FindRandomValidRow();
    if(row != undefined)
        DisplayResult(true,"UTFindRandomValidRowReturnsValidRow");
    else
        DisplayResult(false,"UTFindRandomValidRowReturnsValidRow");
}
function UTCheckGameOverWithGameOver(){
    RemoveAllMatches();
    var isGameOver = CheckGameOver();
    if(isGameOver)
        DisplayResult(true,"UTCheckGameOverWithGameOver");
    else
        DisplayResult(false,"UTCheckGameOverWithGameOver");
}
function UTCheckGameOverWithNoGameOver(){
    var isGameOver = CheckGameOver();
    if(!isGameOver)
        DisplayResult(true,"UTCheckGameOverWithNoGameOver");
    else
        DisplayResult(false,"UTCheckGameOverWithNoGameOver");
}
function DisplayResult(pass,functionName){
    if(pass)
        console.log("[PASSED] " + functionName);
    else
        console.log("[FAILED] " + functionName);
}
function RemoveAllBut1Matches(){
    document.getElementById("row2").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row2").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row2").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row3").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row3").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row3").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row3").removeChild(document.getElementById("row1").children[0]);
    document.getElementById("row3").removeChild(document.getElementById("row1").children[0]);
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