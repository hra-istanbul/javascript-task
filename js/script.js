let appZero = document.querySelector('.zero');
let appMinus = document.querySelector('.minus');
let appPlus = document.querySelector('.plus');
let appReset = document.querySelector('.reset');


let volue = 0;
function plusVelue() {
    volue++;
    appZero.textContent = volue;
    if (volue > 0) {
        appZero.style.color = "green"
    }
    if (volue === 0) {
        appZero.style.color = "black"
    }
}
function minusVelue() {
    if (volue > 0) {
        volue--
        appZero.textContent = volue
    }
    if (volue === 0) {
        appZero.style.color = "black"
    }

}
function resetVelue() {
    volue = 0
    appZero.style.color = "black"
    appZero.textContent = volue
}
appMinus.addEventListener('click', minusVelue)
appPlus.addEventListener('click', plusVelue)
appReset.addEventListener('click', resetVelue)