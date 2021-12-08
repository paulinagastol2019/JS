const addH1 = document.createElement('h1');
document.body.appendChild(addH1);
addH1.textContent = "Kliknij parę razy myszką!"
addH1.style.fontFamily = 'Roboto';
addH1.style.textAlign = 'center';

const anotherColor = (e) => {
    if(e.clientX && e.clientY%2 === 0) {
        document.body.style.backgroundColor = 'green';
        addH1.textContent = "Współrzędne kursora myszki są parzyste"

    }else if(e.clientX && e.clientY%3 === 0){
        document.body.style.backgroundColor = 'orange';
        addH1.textContent = "Współrzędne kursora myszki są nieparzyste"

    }else{
        document.body.style.backgroundColor = 'blue';
        addH1.textContent = "Współrzędne kursora myszki są różne"
    }
}

window.addEventListener('click', anotherColor)