const one = document.getElementById('one');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const del = document.getElementById('delete');
const output = document.getElementById('output');

let number = 0;

one.addEventListener('click', function() {
    number += 1;
    output.innerText = number;
})

five.addEventListener('click', function() {
    number += 5;
    output.innerText = number;
})

ten.addEventListener('click', function() {
    number += 10;
    output.innerText = number;
})
del.addEventListener('click', function() {
    number = 0;
    output.innerText = number;
})