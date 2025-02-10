let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('Ac');
    } else if (key === 'Escape') {
        handleInput('Ac');
    } else if (['+', '-', '*', '/','%','.'].includes(key) || !isNaN(key)) {
        handleInput(key);
    }
});

function handleInput(value) {
    if (value === '=') {
        try {
            string = Function(`"use strict"; return (${string})`)();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value === 'Ac') {
        string = "";
        input.value = string;
    } else if (value === '⌫') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (value === '×') {
        string += '*';
        input.value = string;
    } else if (value === '÷') {
        string += '/';
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}