var x = 0;
var m = 1;
var dobalas_to;
var b = 1;
var b_memory = 1;
var b2 = 1;
var b2_memory = 1;
var melyik_gomb = 0;
var hard = false;
var random_limit = 13;
var dobalas_ido = 2000;

//átálítja a nehézséget
function nehezseg() {
    if (document.getElementById("nehezseg").innerHTML == "Könnyű") {
        hard = true;
        document.getElementById("nehezseg").innerHTML = "Nehéz";
        document.getElementById("nehezseg").style.color = "red";
        document.getElementsByClassName("hard").src = "boom2.png";
        random_limit = 26;
        document.getElementById("kep13").src = "lik.png";
        document.getElementById("kep14").src = "lik.png";
        document.getElementById("kep15").src = "lik.png";
        document.getElementById("kep16").src = "lik.png";
        document.getElementById("kep17").src = "lik.png";
        document.getElementById("kep18").src = "lik.png";
        document.getElementById("kep19").src = "lik.png";
        document.getElementById("kep20").src = "lik.png";
        document.getElementById("kep21").src = "lik.png";
        document.getElementById("kep22").src = "lik.png";
        document.getElementById("kep23").src = "lik.png";
        document.getElementById("kep24").src = "lik.png";
        document.getElementById("kep25").src = "lik.png";
    } else {
        hard = false;
        document.getElementById("nehezseg").innerHTML = "Könnyű";
        document.getElementById("nehezseg").style.color = "white";
        random_limit = 13;
        document.getElementById("kep13").src = "";
        document.getElementById("kep14").src = "";
        document.getElementById("kep15").src = "";
        document.getElementById("kep16").src = "";
        document.getElementById("kep17").src = "";
        document.getElementById("kep18").src = "";
        document.getElementById("kep19").src = "";
        document.getElementById("kep20").src = "";
        document.getElementById("kep21").src = "";
        document.getElementById("kep22").src = "";
        document.getElementById("kep23").src = "";
        document.getElementById("kep24").src = "";
        document.getElementById("kep25").src = "";
    }
}

//add egy random számot és elindítja játékot
function start() {
    x = Math.floor(Math.random()*random_limit);
    if (x == 0) {
        x =+ 1;
    }
    if (x == m) {
        start();
    }
    game();
    m = x;
    dobalas_to = setTimeout(start, dobalas_ido);
}

//lerak egy bombát
function bomba() {
    b = Math.floor(Math.random()*random_limit);
    if (document.getElementById <= 15 && hard == true) {
        dobalas_ido = 1250;
    }
    if (b == 0) {
        b =+ 1;
    }
    if(b == x) {
        bomba();
    }
    document.getElementById("kep" + b).src = "bomba2.png";
    document.getElementById("gomb" + b).disabled = false;
}

function bomba2() {
    b2 = Math.floor(Math.random()*random_limit);
    if (hard == true) {
        dobalas_ido = 750;
    }
    if (b2 == 0) {
        b2 =+ 1;
    }
    if(b2 == x) {
        bomba2();
    }
    if (b2 == b) {
        bomba2();
    }
    document.getElementById("kep" + b2).src = "bomba2.png";
    document.getElementById("gomb" + b2).disabled = false;
}
function pont() {
    if (document.getElementById("pontok").innerHTML <= 9) {
        document.getElementById("pontok").innerHTML = document.getElementById("pontok").innerHTML*1 + 1;
    }

    if (document.getElementById("pontok").innerHTML >= 9) {
        if (melyik_gomb == b_memory) {
            document.getElementById("pontok").innerHTML = document.getElementById("pontok").innerHTML*1 - 5;
        } else {
            document.getElementById("pontok").innerHTML = document.getElementById("pontok").innerHTML*1 + 1;
        }
    }
    if (document.getElementById("pontok").innerHTML >= 15 && hard == true) {
        if (melyik_gomb == b2_memory) {
            document.getElementById("pontok").innerHTML = document.getElementById("pontok").innerHTML*1 - 5;
        }
    }   
    b_memory = b;
    b2_memory = b2;
}

function stop() {
    alert("A játéknak vége!\nElért pont: " + document.getElementById("pontok").innerHTML);
    if (document.getElementById("pontok").innerHTML >= document.getElementById("rekord").innerHTML) {
        document.getElementById("rekord").innerHTML = document.getElementById("pontok").innerHTML;
    }
    clearTimeout(stop_to);
    dobalas_ido = 2000;
    document.getElementById("pontok").innerHTML = "";
    reset();
    x = 0;
    m = 1;
    b = 1;
    b2 = 1;
}

//visszaszámláló
var c = 30;
var szamalalo_to;
function szamlalo() {
	if (c == -1) {
    	clearTimeout(szamalalo_to);
    } else if (vege == false) {
    	document.getElementById("ido").innerHTML = c;
  		c = c - 1;
  		szamalalo_to = setTimeout(szamlalo, 1000);
    }
}
function szamlalobe() {
    c = 30;
    vege = false;
	clearTimeout(szamalalo_to);
    szamlalo();
}

function reset() {
    clearTimeout(dobalas_to);
    document.getElementById("kep" + m).src = "lik.png";
    document.getElementById("gomb" + m).disabled = true;
    document.getElementById("kep" + b).src = "lik.png";
    document.getElementById("gomb" + b).disabled = true;
    document.getElementById("kep" + b2).src = "lik.png";
    document.getElementById("gomb" + b2).disabled = true;
    if (document.getElementById("pontok").innerHTML >= 10) {
        bomba();
    }
    if (document.getElementById("pontok").innerHTML >= 15 && hard == true) {
        bomba2();
    }
}

function game() {
    if(x == 1) {
        reset();
        document.getElementById("kep1").src = "vakond.png";
        document.getElementById("gomb1").disabled = false;
    } else if(x == 2){
        reset();
        document.getElementById("kep2").src = "vakond.png";
        document.getElementById("gomb2").disabled = false;
    } else if(x == 3){
        reset();
        document.getElementById("kep3").src = "vakond.png";
        document.getElementById("gomb3").disabled = false;
    } else if(x == 4){
        reset();
        document.getElementById("kep4").src = "vakond.png";
        document.getElementById("gomb4").disabled = false;
    } else if(x == 5){
        reset();
        document.getElementById("kep5").src = "vakond.png";
        document.getElementById("gomb5").disabled = false;
    } else if(x == 6){
        reset();
        document.getElementById("kep6").src = "vakond.png";
        document.getElementById("gomb6").disabled = false;
    } else if(x == 7){
        reset();
        document.getElementById("kep7").src = "vakond.png";
        document.getElementById("gomb7").disabled = false;
    } else if(x == 8){
        reset();
        document.getElementById("kep8").src = "vakond.png";
        document.getElementById("gomb8").disabled = false;
    } else if(x == 9){
        reset();
        document.getElementById("kep9").src = "vakond.png";
        document.getElementById("gomb9").disabled = false;
    } else if(x == 10){
        reset();
        document.getElementById("kep10").src = "vakond.png";
        document.getElementById("gomb10").disabled = false;
    } else if(x == 11){
        reset();
        document.getElementById("kep11").src = "vakond.png";
        document.getElementById("gomb11").disabled = false;
    } else if(x == 12){
        reset();
        document.getElementById("kep12").src = "vakond.png";
        document.getElementById("gomb12").disabled = false;
    } else if(x == 13){
        reset();
        document.getElementById("kep13").src = "vakond.png";
        document.getElementById("gomb13").disabled = false;
    } else if(x == 14){
        reset();
        document.getElementById("kep14").src = "vakond.png";
        document.getElementById("gomb14").disabled = false;
    } else if(x == 15){
        reset();
        document.getElementById("kep15").src = "vakond.png";
        document.getElementById("gomb15").disabled = false;
    } else if(x == 16){
        reset();
        document.getElementById("kep16").src = "vakond.png";
        document.getElementById("gomb16").disabled = false;
    } else if(x == 17){
        reset();
        document.getElementById("kep17").src = "vakond.png";
        document.getElementById("gomb17").disabled = false;
    } else if(x == 18){
        reset();
        document.getElementById("kep18").src = "vakond.png";
        document.getElementById("gomb18").disabled = false;
    } else if(x == 19){
        reset();
        document.getElementById("kep19").src = "vakond.png";
        document.getElementById("gomb19").disabled = false;
    } else if(x == 20){
        reset();
        document.getElementById("kep20").src = "vakond.png";
        document.getElementById("gomb20").disabled = false;
    } else if(x == 21){
        reset();
        document.getElementById("kep21").src = "vakond.png";
        document.getElementById("gomb21").disabled = false;
    } else if(x == 22){
        reset();
        document.getElementById("kep22").src = "vakond.png";
        document.getElementById("gomb22").disabled = false;
    } else if(x == 23){
        reset();
        document.getElementById("kep23").src = "vakond.png";
        document.getElementById("gomb23").disabled = false;
    } else if(x == 24){
        reset();
        document.getElementById("kep24").src = "vakond.png";
        document.getElementById("gomb24").disabled = false;
    } else if(x == 25){
        reset();
        document.getElementById("kep25").src = "vakond.png";
        document.getElementById("gomb25").disabled = false;
    }
}

//megadják hogy melyik gombot nyomom meg
function gomb1() {melyik_gomb = 1;}
function gomb2() {melyik_gomb = 2;}
function gomb3() {melyik_gomb = 3;}
function gomb4() {melyik_gomb = 4;}
function gomb5() {melyik_gomb = 5;}
function gomb6() {melyik_gomb = 6;}
function gomb7() {melyik_gomb = 7;}
function gomb8() {melyik_gomb = 8;}
function gomb9() {melyik_gomb = 9;}
function gomb10() {melyik_gomb = 10;}
function gomb11() {melyik_gomb = 11;}
function gomb12() {melyik_gomb = 12;}
function gomb13() {melyik_gomb = 13;}
function gomb14() {melyik_gomb = 14;}
function gomb15() {melyik_gomb = 15;}
function gomb16() {melyik_gomb = 16;}
function gomb17() {melyik_gomb = 17;}
function gomb18() {melyik_gomb = 18;}
function gomb19() {melyik_gomb = 19;}
function gomb20() {melyik_gomb = 20;}
function gomb21() {melyik_gomb = 21;}
function gomb22() {melyik_gomb = 22;}
function gomb23() {melyik_gomb = 23;}
function gomb24() {melyik_gomb = 24;}
function gomb25() {melyik_gomb = 25;}
