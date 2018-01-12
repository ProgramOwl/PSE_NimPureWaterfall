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

}
function UTEndTurnButtonWithComputerAndPlayerWins(){
    
}
function UTEndTurnButtonWithComputerAndNoOneWins(){
    
}
function UTEndTurnButtonWithPlayerAndPlayer1Wins(){
    
}
function UTEndTurnButtonWithPlayerAndPlayer2Wins(){
    
}
function UTEndTurnButtonWithPlayerAndNoOneWins(){
    
}
function UTEndTurnButtonWithPlayerBeingSwitched(){
    
}
function UTGetMatchesWithValidRow(){

}
function UTGetMatchesWithInvalidRow(){
    
}
function UTComputerTurnOneChildRemoved(){
    
}
function UTComputerTurnDisabledButtons(){
    
}
function UTFindRandomValidRowReturnsValidRow(){

}
function UTCheckGameOverWithGameOver(){

}
function UTCheckGameOverWithNoGameOver(){

}
function DisplayResult(pass,functionName){
    if(pass)
        console.log("[PASSED] " + functionName);
    else
        console.log("[FAILED] " + functionName);
}