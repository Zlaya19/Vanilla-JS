const captchaDiv = document.getElementById('captchaDiv');
const btn = document.getElementById('btn');
let input = document.getElementById('input');
let output = '';

    window.addEventListener('load', function(){

        
        for(let i = 0; i < 6; i++ ){
            let paragraph = document.createElement('p');
            paragraph.innerText = randomLetter();
            paragraph.style.fontSize = randomFontsize();
            paragraph.style.color = randomFontColor();
            paragraph.style.transform = rotateParagraph();
            paragraph.style.opacity = opacityParagraph();
            paragraph.style.textTransform = BigSmall(); 
            captchaDiv.appendChild(paragraph);

        }  

            btn.addEventListener('click', function(){
                
                if(input.value === captchaDiv.textContent){
                    captchaDiv.innerHTML = '<h1>' + "Correct" + '</h1>';
                }
            });
    })
    

function randomLetter(){
    const captchaItems = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','u','v','w','x','y','z'];
    return captchaItems[Math.floor(Math.random() * captchaItems.length)];
}
   
function randomFontsize(){
    const fontsizeItems = ['36px','38px','40px','42px','44px','46px'];
    return fontsizeItems[Math.floor(Math.random() * fontsizeItems.length)];
}

function randomFontColor(){
    const fontcolorItems = ['gold','whitesmoke','coral'];
    return fontcolorItems[Math.floor(Math.random() * fontcolorItems.length)];
}

function rotateParagraph(){
    const rotateLetter = ["rotate(-1deg)", "rotate(5deg)","rotate(10deg)","rotate(15deg)"];
    return rotateLetter[Math.floor(Math.random() * rotateLetter.length)];
};

function opacityParagraph(){
    const opacityFont = ["0.2", "1", "1", "1", "1", "1", "1"];
    return opacityFont[Math.floor(Math.random() * opacityFont.length)];
};

function BigSmall(){
    const capitalLower = ["lowercase","capitalize"];
    return capitalLower[Math.floor(Math.random() * capitalLower.length)];
};

