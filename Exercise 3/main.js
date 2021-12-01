let size = 20;
let fGrow = true;  //flaga

document.body.style.height = 10000 + 'vh';
const div = document.createElement('div');
document.body.appendChild(div);

div.style.height = size + 'px';
div.style.width= 100 + '%';
div.style.backgroundColor = 'royalblue';
div.style.position = 'fixed';

const growDiv = () => {

   if(size >= innerHeight/2){
       fGrow = !fGrow;
   }
   else if(size<=0){
       fGrow = true;
   }

   if(fGrow == true){
       size+=20;
       div.style.backgroundColor = 'royalblue';
   }
   else{
       size-=20;
       div.style.backgroundColor = 'skyblue';
   }
   div.style.height = size + 'px';
   div.style.width= 100 + '%';
}

window.addEventListener('scroll', growDiv)