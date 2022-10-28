let buttom1 = document.querySelector(".site-up-nolik");
let buttom2 = document.querySelector(".site-up-krestik-border");
let nolic = `<i
class="fa fa-circle-o fa-4x choze"
aria-hidden="true"
></i>`;
let krestik = `<i
class="fa fa-times fa-4x choze"
aria-hidden="true"
></i>`;
let consider = `<i
class="fa fa-times fa-4x hidden"
aria-hidden="true"
></i>`;
let polosa1 = document.querySelector(".site-down-draw1");
let polosa2 = document.querySelector(".site-down-draw2");
let polosa3 = document.querySelector(".site-down-draw3");
let polosa4 = document.querySelector(".site-down-draw4");
let polosa5 = document.querySelector(".site-down-draw5");
let polosa6 = document.querySelector(".site-down-draw6");
let polosa7 = document.querySelector(".site-down-draw7");
let polosa8 = document.querySelector(".site-down-draw8");
let windows = document.querySelector(".positions");
let xman = document.querySelectorAll(".x");
let upper = document.querySelector(".upper");
let newGame = document.querySelector(".upper-inside-chose-left");
let chaos = document.querySelector(".upper-inside-text-right");
let nWinner = document.querySelector(".upper-inside-text-left");

buttom1.onclick = function () {
    buttom1.className = "site-up-nolik";
    buttom2.className = "site-up-krestik-border";
    choses();
};
buttom2.onclick = function () {
    buttom1.className = "site-up-nolik-border";
    buttom2.className = "site-up-krestik";
    choses();
};
let chose = document.querySelector(".site-up-right-chose");

let outside = document.querySelectorAll(".site-down-row-column-1");

for (let index = 0; index < outside.length; index++) {
    outside[index].onclick = function push() {
        if (buttom1.className == "site-up-nolik") {
            outside[index].className = "site-down-row-column-1 noliki y";
            outside[index].innerHTML = nolic;
            buttom1.className = "site-up-nolik-border";
            buttom2.className = "site-up-krestik";

            //Выигрыш
            if (
                outside[0].classList[1] == "noliki" &&
                outside[1].classList[1] == "noliki" &&
                outside[2].classList[1] == "noliki"
            ) {
                polosa1.className = "site-down-draw1 ";
                finishn();
            } else if (
                outside[3].classList[1] == "noliki" &&
                outside[4].classList[1] == "noliki" &&
                outside[5].classList[1] == "noliki"
            ) {
                polosa2.className = "site-down-draw2 ";
                finishn();
            } else if (
                outside[6].classList[1] == "noliki" &&
                outside[7].classList[1] == "noliki" &&
                outside[8].classList[1] == "noliki"
            ) {
                polosa3.className = "site-down-draw3 ";
                finishn();
            } else if (
                outside[0].classList[1] == "noliki" &&
                outside[3].classList[1] == "noliki" &&
                outside[6].classList[1] == "noliki"
            ) {
                polosa4.className = "site-down-draw4";
                finishn();
            } else if (
                outside[1].classList[1] == "noliki" &&
                outside[4].classList[1] == "noliki" &&
                outside[7].classList[1] == "noliki"
            ) {
                polosa5.className = "site-down-draw5";
                finishn();
            } else if (
                outside[2].classList[1] == "noliki" &&
                outside[5].classList[1] == "noliki" &&
                outside[8].classList[1] == "noliki"
            ) {
                polosa6.className = "site-down-draw6";
                finishn();
            } else if (
                outside[2].classList[1] == "noliki" &&
                outside[4].classList[1] == "noliki" &&
                outside[6].classList[1] == "noliki"
            ) {
                polosa7.className = "site-down-draw7";
                finishn();
            } else if (
                outside[0].classList[1] == "noliki" &&
                outside[4].classList[1] == "noliki" &&
                outside[8].classList[1] == "noliki"
            ) {
                polosa8.className = "site-down-draw8";
                finishn();
            } else {
                let list = document.querySelectorAll(".y");
                if (list.length == 9) {
                    finishe();
                }
            }

            choses();
        } else {
            outside[index].className = "site-down-row-column-1 krestiki y";
            outside[index].innerHTML = krestik;
            buttom1.className = "site-up-nolik";
            buttom2.className = "site-up-krestik-border";

            if (
                outside[0].classList[1] == "krestiki" &&
                outside[1].classList[1] == "krestiki" &&
                outside[2].classList[1] == "krestiki"
            ) {
                polosa1.className = "site-down-draw1";
                finishx();
            } else if (
                outside[3].classList[1] == "krestiki" &&
                outside[4].classList[1] == "krestiki" &&
                outside[5].classList[1] == "krestiki"
            ) {
                polosa2.className = "site-down-draw2";
                finishx();
            } else if (
                outside[6].classList[1] == "krestiki" &&
                outside[7].classList[1] == "krestiki" &&
                outside[8].classList[1] == "krestiki"
            ) {
                polosa3.className = "site-down-draw3";
                finishx();
            } else if (
                outside[0].classList[1] == "krestiki" &&
                outside[3].classList[1] == "krestiki" &&
                outside[6].classList[1] == "krestiki"
            ) {
                polosa4.className = "site-down-draw4";
                finishx();
            } else if (
                outside[1].classList[1] == "krestiki" &&
                outside[4].classList[1] == "krestiki" &&
                outside[7].classList[1] == "krestiki"
            ) {
                polosa5.className = "site-down-draw5";
                finishx();
            } else if (
                outside[2].classList[1] == "krestiki" &&
                outside[5].classList[1] == "krestiki" &&
                outside[8].classList[1] == "krestiki"
            ) {
                polosa6.className = "site-down-draw6";
                finishx();
            } else if (
                outside[2].classList[1] == "krestiki" &&
                outside[4].classList[1] == "krestiki" &&
                outside[6].classList[1] == "krestiki"
            ) {
                polosa7.className = "site-down-draw7";
                finishx();
            } else if (
                outside[0].classList[1] == "krestiki" &&
                outside[4].classList[1] == "krestiki" &&
                outside[8].classList[1] == "krestiki"
            ) {
                polosa8.className = "site-down-draw8";
                finishx();
            } else {
                let list = document.querySelectorAll(".y");
                if (list.length == 9) {
                    finishe();
                }
            }

            choses();
        }
    };
}

function choses() {
    if (buttom1.className == "site-up-nolik") {
        chose.innerHTML = `<i class="fa fa-circle-o fa-4x" aria-hidden="true"></i>`;
    } else {
        chose.innerHTML = `<i class="fa fa-times fa-4x" aria-hidden="true"></i>`;
    }
}

function finishn() {
    nWinner.innerHTML = "Выиграл";
    windows.className = "positions colors";
    upper.className = "upper";
    chaos.innerHTML = `<i class="fa fa-circle-o fa-3x" aria-hidden="true"></i>`;
    newGame.onclick = function () {
        for (let index = 0; index < outside.length; index++) {
            outside[index].className = "site-down-row-column-1";
            outside[index].innerHTML = consider;
        }
        for (let index = 0; index < xman.length; index++) {
            xman[index].className = `site-down-draw${index + 1} hidden x`;
        }
        windows.className = "positions";
        upper.className = "upper hidden";
    };
}
function finishx() {
    nWinner.innerHTML = "Выиграл";
    windows.className = "positions colors";
    upper.className = "upper";
    chaos.innerHTML = `<i class="fa fa-times fa-3x" aria-hidden="true"></i>`;
    newGame.onclick = function () {
        for (let index = 0; index < outside.length; index++) {
            outside[index].className = "site-down-row-column-1";
            outside[index].innerHTML = consider;
        }
        for (let index = 0; index < xman.length; index++) {
            xman[index].className = `site-down-draw${index + 1} hidden x`;
        }
        windows.className = "positions";
        upper.className = "upper hidden";
    };
}

function finishe() {
    nWinner.innerHTML = "Ничья";
    chaos.className = "upper-inside-text-right display";
    chaos.innerHTML = `<i class="fa fa-times fa-3x hidden" aria-hidden="true"></i>`;
    windows.className = "positions colors";
    upper.className = "upper";
    newGame.onclick = function () {
        for (let index = 0; index < outside.length; index++) {
            outside[index].className = "site-down-row-column-1";
            outside[index].innerHTML = consider;
        }
        for (let index = 0; index < xman.length; index++) {
            xman[index].className = `site-down-draw${index + 1} hidden x`;
        }
        windows.className = "positions";
        upper.className = "upper hidden";
        chaos.className = "upper-inside-text-right";
    };
}
