const button = document.querySelector('#btn');
const button2 = document.querySelector('#btn2');
const body = document.querySelector('body');
const value = document.querySelector('.hexValue');


const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

button.addEventListener('click', changeHex);
function changeHex() {
    let hex = '#';
  
    for(let i = 0; i < 6; i++){
      const index = Math.floor(Math.random() * hexValues.length)
      hex += hexValues[index];
    }
  
    value.textContent = hex;
    body.style.backgroundColor = hex;
  }
