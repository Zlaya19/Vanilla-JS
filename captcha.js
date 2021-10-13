const captchaDiv = document.getElementById('captchaDiv');
const btn = document.getElementById('btn');
let input = document.getElementById('input');
let output = '';

function randomCaptcha() {
    const captchaItems = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','u','v','w','x','y','z'];
    for(let i = 0; i < 6; i++ ){
        output += captchaItems[Math.floor(Math.random() * captchaItems.length)];
    }
    
}

randomCaptcha();

console.log(output);

captchaDiv.innerHTML = '<h1>' + output + '<h1>'

btn.addEventListener('click', function(){
        
    if(input.value === output){
        captchaDiv.innerText = 'Correct';
    }
});
