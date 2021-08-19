const output = document.getElementById('output');

let digit1 = 0;
let digit2 = 0;
let digit3 = 0;


window.addEventListener('load', function(){
    setInterval(clockDate, 1000);

        function clockDate(){
            let clock = new Date();
            let seconds = clock.getSeconds();
            let minutes = clock.getMinutes();
            let hours = clock.getHours();

            if(seconds < 10){
                digit1 = '0' + clock.getSeconds().toString();
            }else{
                digit1 = seconds;
            }
            if(minutes < 10){
                digit2 = '0' + clock.getMinutes().toString();
            }else{
                digit2 = minutes;
            }
            if(hours < 10){
                digit3 = '0' + clock.getHours().toString();
            }else{
                digit3 = hours;
            }
        output.innerHTML = '<h4>' + digit3 + ' : ' + digit2 + ' : ' + digit1 + '</h4>';
        }
    
});