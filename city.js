let randomCity = document.getElementById('randomWord');
let input = document.getElementById('input');
let numb = document.getElementById('number');
const btn = document.getElementById('btn');

// Array full of european cities i use in this mini quiz

const wordList = ['Amsterdam','Berlin','Sarajevo','Kiew','Ljubljana',
                'Kopenhagen','Oslo','Beograd','Madrid','Dublin','Paris',
                'Helsinki','Zagreb','Atina','Tirana','Ankara','Sofia'];

// Creating an empthy city variable

let city = '';

// Using the random formula on the wordList array and append it in the city variable

    city += wordList[Math.floor(Math.random() * wordList.length)];

    console.log(city);

// By refreshing the page, the unanimous function appear the city variable in the randomCity div

    window.addEventListener('load', function() {
        randomCity.innerText = city;

/*
    By clicking on the btn button, the app takes the input value and compares it with the city variable.
    if the values ​​are the same, you win. if not, you lose.
*/
        btn.addEventListener('click', function(){
            if(input.value == city) {
                numb.innerText = 'YOU WIN!';
                btn.remove();
                clearInterval(counter);
                randomCity.style.color = 'lightgreen';
            }else if(input.value !== city){
                numb.innerText = 'YOU LOSE!';
                btn.remove();
                clearInterval(counter);
            }
        }) 

    });    

        var count = 10;
        var counterIncrement = -1;
        var counter = setInterval(timer, 1000);

//  The timer function count from 10 till 0. If the timer reach 0, you lose.

    function timer() {
    count = count + counterIncrement;
        if (count == 0) {
            counterIncrement = 0;
            btn.remove();
            return numb.innerText = 'YOU LOSE!';
        }
    numb.innerText = count;
}

