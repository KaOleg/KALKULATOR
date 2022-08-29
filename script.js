let input = document.querySelector(".expr");
input.value = 0;
let fontSize = 52;
let buttonsContainer = document.querySelector(".buttons");
let operatiors = ["+", "-", "*", "/", "%"];
buttonsContainer.onclick = function (event) {
    let t = event.target;
    let length = input.value.length;
    if (t.classList.contains("number") && length < 18) {
        if (input.value == 0) {
            input.value = t.innerHTML;
        } else {
            input.value = input.value + t.innerHTML;
        }
        descreaseFontSize(length);
    } else if (t.classList.contains("operation") && length < 16) {
        let expr = input.value;
        let last = expr[expr.length - 1];
        if (operatiors.indexOf(last) == -1) {
            input.value += t.innerHTML;
            descreaseFontSize(length);
        } else {
            input.value = expr.replace(/.$/, t.innerHTML);
        }
    } else if (t.classList.contains("clear_one")) {
        input.value = input.value.substring(0, length - 1);
        if (input.value.length == 0) {
            input.value = 0;
        }
        increaseFontSize(length);
    } else if (t.classList.contains("equal")) {
        let expr = input.value;
        input.value = eval(expr);
    }
};
function descreaseFontSize(length) {
    if (length > 11 && length < 15) {
        fontSize = fontSize - 3;
        input.style.fontSize = fontSize + "px";
    } else if (length >= 15 && length < 18) {
        fontSize = fontSize - 2.8;
        input.style.fontSize = fontSize + "px";
    }
}
function increaseFontSize(length) {
    if (length > 11 && length < 15) {
        fontSize = fontSize + 3;
        input.style.fontSize = fontSize + "px";
    } else if (length >= 15 && length < 18) {
        fontSize = fontSize + 2.8;
        input.style.fontSize = fontSize + "px";
    }
}
