
const nextBtn = document.getElementById('nxtBtn');
const name1 = document.getElementById('nameProfile');
const job = document.getElementById('job');
const textPart = document.getElementById('text-part');
const firstBtn = document.getElementById('PrvBtn');
const textArea = document.getElementById('text_area');
const textBtn = document.getElementById('text_btn');

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

                        name1.innerHTML = `<h3>` + users[currentItem].name + `</h3>`;
                        /* name1.classList.add('name_class'); */
                        mail.innerHTML = `<h3>` + users[currentItem].email + `</h3>`;
                        /* mail.classList.add('job_class'); */
                        textPart.innerHTML = `<li>`+ users[currentItem].phone + `</li>`;
                        textPart.innerHTML += `<li>`+ users[currentItem].website + `</li>`;
                        textPart.innerHTML += `<li>`+ users[currentItem].company.name + `</li>`;
                        textPart.innerHTML += `<li>`+ users[currentItem].company.catchPhrase + `</li>`;
                        textPart.innerHTML += `<li>`+ users[currentItem].company.bs + `</li>`;
                        textPart.classList.add('text_part');
                
                    }
                    
            nextBtn.addEventListener('click', objectChanger);

                objectChanger();
                
                function objectChanger(){
                    currentItem++
                    if( currentItem > users.length - 1){
                        currentItem = 0;
                    }
                        showPerson(currentItem);
                };

            firstBtn.addEventListener('click', objectChangerBack);
        
        
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




