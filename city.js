let randomCity = document.getElementById('randomWord');
let input = document.getElementById('input');
let numb = document.getElementById('number');
const btn = document.getElementById('btn');


const wordList = ['Amsterdam','Berlin','Sarajevo','Kiew','Ljubljana',
                'Kopenhagen','Oslo','Beograd','Madrid','Dublin','Paris',
                'Helsinki','Zagreb','Atina','Tirana','Ankara','Sofia'];

let city = '';

    city += wordList[Math.floor(Math.random() * wordList.length)];

    console.log(city);

    window.addEventListener('load', function() {
        randomCity.innerText = city;


        btn.addEventListener('click', function(){
            if(input.value == city) {
                numb.innerText = 'YOU WIN!';
                clearInterval(counter);
                randomCity.style.color = 'lightgreen';
            }else if(input.value !== city){
                numb.innerText = 'YOU lOSE!';
                clearInterval(counter);
            }
        }) 

    });    

        var count = 10;
        var counterIncrement = -1;
        var counter = setInterval(timer, 1000); 

    function timer() {
    count = count + counterIncrement;
        if (count == 0) {
            counterIncrement = 0;
            return numb.innerText = 'YOU LOSE!';
        }
    numb.innerText = count;
}

