let orderEl = 1;
let size = 15;

const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Kliknij w przycisk!';
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    btn.addEventListener('click', createElementLi);
}

const createElementLi = () => {

    for(let i=1; i <= 10 ;i++){
    const dUl = document.querySelector('ul');
    const newLi = document.createElement('li');
    dUl.appendChild(newLi);
    newLi.textContent = `Element nr ${orderEl++}`;
    newLi.style.fontSize = size + 'px';
    }
    size+=5

}

init();