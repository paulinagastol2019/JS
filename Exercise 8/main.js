const sqr = document.querySelector('div');

let positionX = 50;
let positionY = 90;

sqr.style.left = `${positionX}px`;
sqr.style.top = `${positionY}px`;

let insertSqrX;
let insertSqrY;

let active = false;

sqr.addEventListener('mousedown', (e)=>{
    sqr.style.backgroundColor = 'grey';
    insertSqrX = e.offsetX;
    insertSqrY = e.offsetY;
    active = true;

})

sqr.addEventListener('mousemove', (e)=>{
    if(active){
    positionX = e.clientX - insertSqrX;
    positionY = e.clientY - insertSqrY;
    sqr.style.left = `${positionX}px`;
    sqr.style.top = `${positionY}px`;
    }
})

sqr.addEventListener('mouseup', () => {
    sqr.style.backgroundColor = 'deeppink';
    active = !active;
})