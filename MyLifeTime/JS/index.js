var conRight = document.getElementsByClassName("con-right");
var conLeft = document.getElementsByClassName("con-left");

var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function phaseZeroHide() {
    if (conRight[0].style.display !== "none") {
        conRight[0].style.display = "none";
        conLeft[0].style.display = "none";
        button0.innerHTML = "[显示]"
    } else {
        conRight[0].style.display = "block";
        conLeft[0].style.display = "block";
        button0.innerHTML = "[隐藏]"
    }
}

function phaseOneHide() {
    if (conRight[1].style.display !== "none") {
        conRight[1].style.display = "none";
        conLeft[1].style.display = "none";
        button1.innerHTML = "[显示]"
    } else {
        conRight[1].style.display = "block";
        conLeft[1].style.display = "block";
        button1.innerHTML = "[隐藏]"
    }
}

function phaseTwoHide() {
    if (conRight[2].style.display !== "none") {
        conRight[2].style.display = "none";
        conLeft[2].style.display = "none";
        button2.innerHTML = "[显示]"
    } else {
        conRight[2].style.display = "block";
        conLeft[2].style.display = "block";
        button2.innerHTML = "[隐藏]"
    }
}

function phaseThreeHide() {
    if (conRight[3].style.display !== "none") {
        conRight[3].style.display = "none";
        conLeft[3].style.display = "none";
        button3.innerHTML = "[显示]"
    } else {
        conRight[3].style.display = "block";
        conLeft[3].style.display = "block";
        button3.innerHTML = "[隐藏]"
    }
}

