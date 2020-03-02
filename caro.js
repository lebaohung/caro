let html = "";
let num = 20;
html += "<table>";
html += "<caption>Làm cho ngiu chơi chơi</caption>";
let arr = [];
for (let i = 0; i < num; i++) {
    arr[i] = [];
    html += "<tr>";
    for (let j = 0;j < num; j++) {
        arr[i][j] = "";
        html += "<td onclick='changeValue(this," + i + "," + j + ");'>" + arr[i][j] + "</td>";
    }
    html += "</tr>";
}
html += "</table>";
document.getElementById("makeTable").innerHTML = html;
let status = "x";
function changeValue(cell, x, y) {
    insert(x, y);
    changeStatus();
    // cell.innerHTML = arr[x][y];
    if (arr[x][y] == "x") {
        cell.style.backgroundColor = "#E91635";
    }   else if(arr[x][y] == "o") {
        cell.style.backgroundColor = "#232320";
    }
    checkRow(x, y);
    checkSpan(x, y);
    checkCross1(x, y);
    checkCross2(x, y);
}
function insert(x, y) {
    if(arr[x][y] === "") {
        arr[x][y] = status;
     }
}

function changeStatus() {
    if(status === "x")
        status = "o";
    else status = "x";
}

function checkRow(x,y) {
    let count = 1;
    let xTemp = x, yTemp = y;
    while(arr[xTemp][yTemp+1] === arr[xTemp][yTemp]) {
        count++;
        yTemp++;
    }
    yTemp = y;
    while(arr[xTemp][yTemp-1] === arr[xTemp][yTemp]) {
        count++;
        yTemp--;
    }
    alertWin(count, 5);
}

function checkSpan(x, y) {
    let count = 1;
    let xTemp = x, yTemp = y;
    while(arr[xTemp+1][yTemp] === arr[xTemp][yTemp]) {
        count++;
        xTemp++;
    }
    xTemp = x;
    while(arr[xTemp-1][yTemp] === arr[xTemp][yTemp]) {
        count++;
        xTemp--;
    }
    alertWin(count, 5);
}

function checkCross1(x, y) {
    let count = 1;
    let xTemp = x, yTemp = y;
    while(arr[xTemp+1][yTemp+1] === arr[xTemp][yTemp]) {
        count++;
        yTemp++;
        xTemp++;
    }
    xTemp = x;
    yTemp = y;
    while(arr[xTemp-1][yTemp-1] === arr[xTemp][yTemp]) {
        count++;
        yTemp--;
        xTemp--;
    }
    alertWin(count, 5);
}
function checkCross2(x, y) {
    let count = 1;
    let xTemp = x, yTemp = y;
    while(arr[xTemp+1][yTemp-1] === arr[xTemp][yTemp]) {
        count++;
        yTemp--;
        xTemp++;
    }
    xTemp = x;
    yTemp = y;
    while(arr[xTemp-1][yTemp+1] === arr[xTemp][yTemp]) {
        count++;
        yTemp++;
        xTemp--;
    }
    alertWin(count, 5);
}

function alertWin(number, target) {
    if(number === target){
        alert("You are winner");
    }
}