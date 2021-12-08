let size = 20;
const btn = document.querySelector('button');
btn.style.fontSize = `${size}px`;
const liEle = document.querySelectorAll('li');

const newElemnts = () => {

    liEle.forEach((liEl) => {
        liEl.style.display = 'block';
        liEl.style.fontSize = `${size}px`;
    })
    size++
}

btn.addEventListener('click', newElemnts)