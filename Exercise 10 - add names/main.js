const btnAdd = document.querySelector('button');
const txtInput = document.querySelector('input');
const divList = document.querySelector('div');

const addNames = (e) => {
  e.preventDefault();
  divList.textContent = txtInput.value;
}

btnAdd.addEventListener('click', addNames)