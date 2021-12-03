const elementDiv = document.querySelector('div');

let divX = 100;
let divY = 120;

elementDiv.style.left = `${divX}px`;
elementDiv.style.top = `${divY}px`;

let insertElementDivX;
let insertElementDivY;

let active = false;

elementDiv.addEventListener('mousedown', (e) => {
    elementDiv.style.backgroundColor = 'grey';
    insertElementDivX = e.offsetX;
    insertElementDivY = e.offsetY;
    active = true;
})

elementDiv.addEventListener('mousemove', (e) => {
  if(active){
    divX = e.clientX - insertElementDivX;
    divY = e.clientY - insertElementDivY;
    elementDiv.style.left = `${divX}px`;
    elementDiv.style.top = `${divY}px`;
  }
})

elementDiv.addEventListener('mouseup', () => {
    elementDiv.style.backgroundColor = 'rgb(111, 180, 6)';
    active = !active;
})