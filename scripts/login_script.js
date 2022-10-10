document.getElementById("p3arts").style.visibility = "hidden";
document.getElementById("op21").style.visibility = "hidden";
document.getElementById("op22").style.visibility = "hidden";
document.getElementById("op23").style.visibility = "hidden";
document.getElementById("oplast2").style.visibility = "hidden";
document.getElementById("oplast22").style.visibility = "hidden";

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
        document.getElementById("texthead").style.marginLeft = "8vw";
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

setInterval(celular, 1000)



document.getElementById("contlog").style.visibility = "hidden";
document.getElementById("login").style.visibility = "hidden";
document.getElementById("log").style.visibility = "hidden";
document.getElementById("passw").style.visibility = "hidden";
document.getElementById("sen").style.visibility = "hidden";



var num1 = 0

function ep() {
    document.getElementById("contlog").style.visibility = "visible";
    document.getElementById("contlog").style.opacity = num1;
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("login").style.opacity = num1;
    document.getElementById("log").style.visibility = "visible";
    document.getElementById("log").style.opacity = num1;
    document.getElementById("passw").style.visibility = "visible";
    document.getElementById("passw").style.opacity = num1;
    document.getElementById("sen").style.visibility = "visible";
    document.getElementById("sen").style.opacity = num1;
    num1 += 0.02 / 3
}

for (var i = 0; i < 150; i++) {
    setTimeout(ep, 10 * i);
}