const pass1 = document.querySelector('#password1')
const pass2 = document.querySelector('#password2');
const button = document.querySelector('.sub-button');
const passmatch = document.querySelector('.passwordmatch')
const formcontainer = document.querySelector('.form-container');


function checkSimilarity(){
  if(pass1.value === pass2.value){
    passmatch.style.cssText ='color:green; font-size:2em';
    passmatch.textContent === 'OK';
    button.disabled = false;
  }
  else{
    passmatch.textContent === 'PASSWORDS DO NOT MATCH!'
    passmatch.style.cssText ='color:red; font-size:2em';
    button.disabled = true;
  }
}

pass2.addEventListener('input', checkSimilarity)

