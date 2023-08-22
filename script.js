console.log("Welcome");

var turn = "X"
var counterX = 0;
var counterO = 0;
var isgameOver = false;
var isClickable = true;
var flag = 0;
var change = document.getElementsByClassName('infoTurn')[0];
var tile = document.getElementsByClassName('box');

function Start(box) {
    if (isClickable) {
        if (box.innerText == "") {
            box.innerText = turn;
            if (turn == "X") {
                box.style.color = "red";
            }
            if (turn == "O") {
                box.style.color = "darkgreen";
            }
        }
        else {
                Start(box);
            }
            checkWin();
            if (!isgameOver) {
                changeTurn();
            }
        }
    }

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        change.innerText = "Turn for O";
    }
    else {
        turn = "X";
        change.innerText = "Turn for X";
    }
}

function checkWin() {
    // Condition for rows
    if ((tile[0].innerText === tile[1].innerText) && (tile[1].innerText === tile[2].innerText) && (tile[0].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    if ((tile[3].innerText === tile[4].innerText) && (tile[4].innerText === tile[5].innerText) && (tile[3].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    if ((tile[6].innerText === tile[7].innerText) && (tile[7].innerText === tile[8].innerText) && (tile[6].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    // Condition for diagonals
    if ((tile[0].innerText === tile[4].innerText) && (tile[4].innerText === tile[8].innerText) && (tile[0].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    if ((tile[2].innerText === tile[4].innerText) && (tile[4].innerText === tile[6].innerText) && (tile[2].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    // Condition for columns
    if ((tile[0].innerText === tile[3].innerText) && (tile[3].innerText === tile[6].innerText) && (tile[0].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    if ((tile[1].innerText === tile[4].innerText) && (tile[4].innerText === tile[7].innerText) && (tile[1].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    if ((tile[2].innerText === tile[5].innerText) && (tile[5].innerText === tile[8].innerText) && (tile[2].innerText !== "")) {
        change.innerText = turn + " Win";
        isgameOver = true;
        isClickable = false;
        increase();
    }

    for (var i = 0; i < 9; i++) {
        if (tile[i].innerText !== "") {
            flag = 1;
        }
        else {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        change.innerText = "Tie";
        isgameOver = true;
        isClickable = false;
    }
}

function restart() {
    turn = "X"
    change.innerText = "Turn for X";
    isgameOver = false;
    isClickable = true;
    counterO = 0;
    document.getElementsByClassName('forO')[0].innerText = counterO;
    counterX = 0;
    document.getElementsByClassName('forX')[0].innerText = counterX;
    for (var i = 0; i < 9; i++) {
        tile[i].innerText = "";
    }
}

function increase(){
    if(turn === "X")
    {
        counterX++;
        document.getElementsByClassName('forX')[0].innerText = counterX;
    }
    if(turn === "O")
    {
        counterO++;
        document.getElementsByClassName('forO')[0].innerText = counterO;
    }
}

function nextRound(){
    if(isgameOver)
    {
        turn = "X"
        change.innerText = "Turn for X";
        isgameOver = false;
        isClickable = true;
        for (var i = 0; i < 9; i++) {
            tile[i].innerText = "";
        }
    }
}