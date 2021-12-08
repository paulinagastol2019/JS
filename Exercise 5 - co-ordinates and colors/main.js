const mainTxt = document.createElement('h1');
document.body.appendChild(mainTxt);
mainTxt.textContent = "Rusz myszką!";
let positionX;
let positionY;

const changeColor = (e) => {
    positionX = e.clientX;
    positionY = e.clientY;
    mainTxt.textContent =  `${positionX}, ${positionY}`;
    document.body.style.backgroundColor =  `rgb(${positionX/2}, ${positionY/2}, ${positionY*positionX})`;
}

window.addEventListener('mousemove', changeColor)