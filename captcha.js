const captchaDiv = document.getElementById('captchaDiv');
const btn = document.getElementById('btn');
let input = document.getElementById('input');
let headline = document.getElementById('headline');

/*  
    the window listener starts the unknown function which creates a paragraph element.
    This paragraph element goes trough five functions which define their look,
    and this will happend six times because of the for loop at the begin of the function.
    After any loop, the paragraph will append on the captchaDiv and we will see the result.
*/

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

    /*  the click listener starts by clicking on the btn button and checks
        if the input value is the same as the captcha code  */

            btn.addEventListener('click', function(){
                
                if(input.value !== captchaDiv.textContent){
                    headline.innerHTML = '<h4>' + "wrong code" + '</h4>';
                }else{
                    headline.innerHTML = `<h4> correct </h4>`;
                }
            });
    })
    
//  the functions which defines how the paragraph will look like

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

