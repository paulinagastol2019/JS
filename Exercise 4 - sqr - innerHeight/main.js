let size = 30;
let grow = true;
document.body.style.backgroundColor = 'green';
document.body.style.height = 10000 + 'vh';
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

newDiv.style.height = `${size}px`;
newDiv.style.width = `${size}px`;

const changeSquare = () => {

    if(size <= 0 ){
        grow = true;
    }else if(size >= window.innerWidth/2){
        grow = !grow;
    }
    if(grow){
        size+=5;
    }else{
        size-=5;  
    }
    newDiv.style.height = `${size}px`;
    newDiv.style.width = `${size}px`;
}

window.addEventListener('scroll', changeSquare)