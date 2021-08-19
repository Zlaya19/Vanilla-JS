const images = document.getElementById('images');
const textDiv = document.getElementById('text-div');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const data1 = document.getElementById('id-data');
const data2 = document.getElementById('id-data-2');

let currentItem = 0;

    
window.addEventListener('load', openLoad);

function openLoad() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users', true);


    xhr.onload = function() {
        if(this.status === 200){
            let users = JSON.parse(this.responseText);

                showPerson(currentItem);

                function showPerson(){

                    data1.innerHTML = `<h3>` + users[currentItem].name + `</h3>`;
                    /* name1.classList.add('name_class'); */
                    data2.innerHTML = `<h3>` + users[currentItem].email + `</h3>`;
                    /* mail.classList.add('job_class'); */
                    
                    textDiv.innerHTML = `<li>`+ users[currentItem].website + `</li>`;
                    textDiv.innerHTML += `<li>`+ users[currentItem].company.name + `</li>`;
                    textDiv.innerHTML += `<li>`+ users[currentItem].company.catchPhrase + `</li>`;
                    textDiv.classList.add('text_part');
            
                }
                
        btn1.addEventListener('click', objectChanger);

            objectChanger();
            
            function objectChanger(){
                currentItem++
                if( currentItem > users.length - 1){
                    currentItem = 0;
                }
                    showPerson(currentItem);
            };

        btn2.addEventListener('click', objectChangerBack);
    
    
            objectChangerBack();
            
            function objectChangerBack(){
                currentItem--
                if( currentItem < 0){
                    currentItem = users.length -1;
                }
                    showPerson(currentItem);
            };
        }       
    }

xhr.send();
}