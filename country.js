let input = document.getElementById('input');
const btn = document.getElementById('btn');
const display = document.getElementById('output');

btn.addEventListener('click', function(){
    const user = new XMLHttpRequest();
    user.open('GET', `https://restcountries.eu/rest/v2/name/${input.value}?fullText=true)`, true);

    let output = '';

    user.onload = function(){
        if(this.status === 200){
           output = JSON.parse(this.responseText);

            console.log(output);
            display.innerHTML = `<img src="${output[0].flag}"  <div class="headline"><h1> ${output[0].name} </h1><div>`;
        }
    }

    user.send();
})