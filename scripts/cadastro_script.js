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
        document.getElementById("op11").style.visibility = "hidden";
        document.getElementById("op12").style.visibility = "hidden";
        document.getElementById("op13").style.visibility = "hidden";
        document.getElementById("oplast").style.visibility = "hidden";
        document.getElementById("oplast12").style.visibility = "hidden";
        document.getElementById("texthead").style.marginLeft = "30vh";
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