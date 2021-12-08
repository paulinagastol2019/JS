let red = 0;
let green = 0;
let blue = 0;
const color = `rgb(${red}, ${green}, ${blue})`
const documentColor = document.body.style.backgroundColor = color;

const changeColor = (e) => {

    if(e.keyCode === 38 && red <= 255){
        red+=10;
        green+=10;
        blue+=10;
    }else if(e.keyCode === 40 && red >= 0){
        red-=10;
        green-=10;
        blue-=10;
    }
    const color = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = color;
}

window.addEventListener('keydown', changeColor); //keydown jest dla wszystkich klawiszy, późńiej określamy dokładnie o który nam chodzi (w ciele funkcji)