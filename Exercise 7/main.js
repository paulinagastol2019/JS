const newElTxt = document.createElement('h1');
document.body.appendChild(newElTxt);
newElTxt.textContent = "Poruszaj myszką!";

const changeColors = (e) => {
    const cursor = `${e.clientX}, ${e.clientY}`;
    newElTxt.textContent = cursor;
    document.body.style.backgroundColor = `rgb(${e.clientX},${e.clientY},${e.clientY/2})`
}


window.addEventListener('mousemove', changeColors)