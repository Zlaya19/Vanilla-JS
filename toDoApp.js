
let input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('class-style');
    paragraph.innerText = input.value; 

    input.value = '';
    
    output.appendChild(paragraph); console.log(output)

        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = 'line-through';
        });
        paragraph.addEventListener('dblclick', function(){
            output.removeChild(paragraph);
        });
        
});
