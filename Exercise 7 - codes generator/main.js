const btn = document.querySelector('button');
document.body.appendChild(btn);

const chars = 'QWERTY123456789';
let numberCode = 1000;
let numberCharCode = 10;

const generator = () => {
    for(let i =0; i < numberCode ; i++){
        let code = '';
            for(let i=0; i < numberCharCode; i++){
                let index = Math.floor(Math.random()*chars.length);
                code+=chars[index];
            }
        const newCode = document.createElement('h1');
        document.body.appendChild(newCode);
        newCode.textContent = code;
    }
}
btn.addEventListener('click', generator)

