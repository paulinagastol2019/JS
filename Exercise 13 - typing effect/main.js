const spn = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum, iure, ex ab ducimus corrupti eveniet voluptatem expedita in fuga architecto nobis accusamus obcaecati ullam quos odit a sapiente illo?';

let indexTxt = 0;
const addLetter = () => {
    spn.textContent += txt[indexTxt];
    console.log('ok');
    indexTxt++;
    if(indexTxt === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, 50); //trzeba zatrzymać setInterval/ zwraca również swój index