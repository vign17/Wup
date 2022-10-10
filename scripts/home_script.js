document.getElementById("corpo").style.visibility = "hidden";
document.getElementById("corpo2").style.visibility = "hidden";
document.getElementById("op1").style.visibility = "hidden";
document.getElementById("p3arts").style.visibility = "hidden";
document.getElementById("op21").style.visibility = "hidden";
document.getElementById("op22").style.visibility = "hidden";
document.getElementById("op23").style.visibility = "hidden";
document.getElementById("oplast2").style.visibility = "hidden";
document.getElementById("oplast22").style.visibility = "hidden";


var num = 0
var dx = 10

window.addEventListener('resize',celular)

function op() {
    document.getElementById("corpo").style.visibility = "visible";
    document.getElementById("corpo").style.opacity = num;
    num += 0.02 / 3
    /*lp += dx
    dx *= 0.95*/
}

var num2 = 0

function ap() {
    document.getElementById("corpo2").style.visibility = "visible";
    document.getElementById("corpo2").style.opacity = num2;
    num2 += 0.02 / 3
}

var num3 = 0

function ep() {
    document.getElementById("op1").style.visibility = "visible";
    document.getElementById("op1").style.opacity = num3;
    num3 += 0.02 / 3
}

for (var i = 0; i < 150; i++) {
    setTimeout(op, 10 * i);
    setTimeout(ap, 1000 + 10 * i);
    setTimeout(ep, 1800 + 10 * i);
}


function celular() {
    let h = window.innerHeight
    let w = window.innerWidth-90
    if (h > w) {
        document.getElementById("p3arts").style.visibility = "visible";
        document.getElementById("p3arts").style.position = "absolute";
        document.getElementById("p3arts").style.left = "5px";
        document.getElementById("p3arts").style.top = "5px";
        document.getElementById("p3arts").style.margin = "0";
        document.getElementById("op11").style.display = "none";
        document.getElementById("op12").style.display = "none";
        document.getElementById("op13").style.display = "none";
        document.getElementById("oplast").style.display = "none";
        document.getElementById("oplast12").style.display = "none";

        document.getElementById("texthead").style.position = "absolute";
        document.getElementById("texthead").style.top = "10px";
        document.getElementById("texthead").style.left= "auto";
        document.getElementById("texthead").style.marginLeft = "0";
        document.getElementById("p3arts").style.marginRight = "max(3vw,6vh)";
        document.getElementById("menu").style.alignContent = "center";

    } else {
        document.getElementById("p3arts").style.visibility = "hidden";
        document.getElementById("p3arts").style.position = "absolute";
        document.getElementById("op11").style.visibility = "visible";
        document.getElementById("op12").style.visibility = "visible";
        document.getElementById("op13").style.visibility = "visible";
        document.getElementById("oplast").style.visibility = "visible";
        document.getElementById("oplast12").style.visibility = "visible";
        document.getElementById("texthead").style.marginLeft = "15%";
        document.getElementById("texthead").style.position = "relative";
        document.getElementById("op11").style.display = "flex";
        document.getElementById("op12").style.display = "flex";
        document.getElementById("op13").style.display = "flex";
        document.getElementById("oplast").style.display = "flex";
        document.getElementById("oplast12").style.display = "flex";
        document.getElementById("op21").style.visibility = "hidden";
        document.getElementById("op22").style.visibility = "hidden";
        document.getElementById("op23").style.visibility = "hidden";
        document.getElementById("oplast2").style.visibility = "hidden";
        document.getElementById("oplast22").style.visibility = "hidden";
    }
}

var a = 0;

function clk3() {
    document.getElementById("op21").style.visibility = "visible"
    document.getElementById("op22").style.visibility = "visible"
    document.getElementById("op23").style.visibility = "visible"
    document.getElementById("oplast2").style.visibility = "visible"
    document.getElementById("oplast22").style.visibility = "visible";
    if (a == 1) {
        document.getElementById("op21").style.visibility = "hidden"
        document.getElementById("op22").style.visibility = "hidden"
        document.getElementById("op23").style.visibility = "hidden"
        document.getElementById("oplast2").style.visibility = "hidden"
        document.getElementById("oplast22").style.visibility = "hidden";
        a=0
    }else{
        a=1
    }
}