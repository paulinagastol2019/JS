const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const radaH1 = document.querySelector('h1');
const inputPlace = document.querySelector('input');
const advices = ['Pokaż na co Cię stać!', ' Nie poddawaj się!', ' Walcz!'];
document.body.style.backgroundColor = 'skyblue';

const add = (e) => {
    e.preventDefault();
    const newAdvice = inputPlace.value;
    if(inputPlace.value.length <= 0){
        alert('Wpisz możliwość aby ją dodać!');
    }else if(inputPlace.value.length > 0){
        advices.push(` ${newAdvice}`);
        alert(`Dodałeś ${newAdvice}!`)
    }
    inputPlace.value = '';
    
}
btnAdd.addEventListener('click', add);

const showAdvice = () => {
    const index = Math.floor(Math.random()*advices.length)
    radaH1.textContent = advices[index];
}
btnShowAdvice.addEventListener('click', showAdvice)

const showOption = () => {
    alert(advices);
}
btnShowOptions.addEventListener('click', showOption)

const btnRe = () => {
    radaH1.textContent = '';
}
btnReset.addEventListener('click', btnRe)