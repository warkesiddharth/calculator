
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) return "God help who don't know math";
    return a / b;
}

function operate(op, a, b) {
    if (op == '+') return add(a, b);
    else if (op == '-') return sub(a, b);
    else if (op == '*') return mult(a, b);
    else if (op == '/') return divide(a, b);
}

let first = null;
let act = null;
let sec = null;

const display = document.querySelector("#display");
const numb = document.querySelectorAll(".numbers");
const numbers = Array.prototype.slice.call(numb);
for (let i = 0; i < numbers.length; i++) {
    numb[i].addEventListener('click', function (e) {
        display.innerHTML += `${i}`;

    })
}



const operator = document.querySelectorAll(".operator");
const opt_list = Array.prototype.slice.call(operator);
for (let i = 0; i < opt_list.length; i++) {

    operator[i].addEventListener('click', function (e) {
        if (act == null) {
            ans = operate(act, first, sec);
            first = null;
            sec = null;
            act = null;
        }
        if (ans != null) first = ans;
        else {
            first = parseInt(display.innerHTML);
            display.innerHTML = null;
            act = operator[i].innerHTML;
        }


    })
}

const equal = document.querySelector(".equals");
equal.addEventListener('click', function () {
    if (first == null) display.innerHTML = "enter a funkin number first....y not start fresh--click #AC#";
    else if (act == null) display.innerHTML = "press an opt u dumb fuck";
    else {
        sec = parseInt(display.innerHTML);
        display.innerHTML = null;
        ans = operate(act, first, sec);
        display.innerHTML = ans;
        first = null;
        sec = null;
        act = null;
    }
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    display.innerHTML = null;
    first = null;
    sec = null;
    act = null;
    ans = null;
})
