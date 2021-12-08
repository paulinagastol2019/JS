const btnAdd = document.querySelector('button');
const txtInput = document.querySelector('input');
const divList = document.querySelector('div');
const names = [];

const addName = (e) => {
  e.preventDefault();
  const newName = txtInput.value;
  if(txtInput.value.length > 0){
    
    for(name of names){
      if(name === newName){
        alert('Taka wartość jest już na liscie!');
        return;
      }
    }
  }


  names.push(newName);
  divList.textContent += newName + ', ';
  txtInput.value = '';
}

btnAdd.addEventListener('click', addName)