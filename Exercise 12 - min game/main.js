const dataAboutResultGame ={
    gameNumber: 0,
    win: 0,
    lose: 0,
    draw: 0,
}

const dataAboutHands ={
    playerHand: '',
    aiHand: '',
}

const handsData = [...document.querySelectorAll('.select img')];

function chooseHand() {
    dataAboutHands.playerHand = this.dataset.option;
    handsData.forEach((handData)=> handData.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px deeppink';
}

const startGame = document.querySelector('.start');

const aiChoiceHand = () =>{
    dataAboutHands.aiHand = handsData[Math.floor(Math.random() * 3)].dataset.option;
    return dataAboutHands.aiHand;
}

const checkResult = (player, ai) => {
    if(player === ai){
       return 'draw';
    }else if(player === 'papier' && ai === 'kamień' || player === 'kamień' && ai === 'nożyczki' || player === 'nożyczki' && ai === 'papier'){
        return 'win';
    }else {
        return 'loss';
    }
}
const publishResult = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++dataAboutResultGame.gameNumber;

    if(result === 'win'){
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś';
        document.querySelector('[data-summary="who-win"]').style.color = 'Green';
        document.querySelector('p.wins span').textContent = ++dataAboutResultGame.win;
    }else if( result === 'draw'){
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis !';
        document.querySelector('[data-summary="who-win"]').style.color = 'Orange';
        document.querySelector('p.draws span').textContent = ++dataAboutResultGame.draw;
    }else{
        document.querySelector('[data-summary="who-win"]').textContent = 'Wygrał komputer!';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
        document.querySelector('p.losses span').textContent = ++dataAboutResultGame.lose;
    }

}

const endGame = () => {
    document.querySelector(`[data-option="${dataAboutHands.playerHand}"]`).style.boxShadow = '';
    dataAboutHands.playerHand = '';
    dataAboutHands.aiHand = '';

}

const playGame = () => {
    if(!dataAboutHands.playerHand){
       return alert('Wybierz dłoń!');
    }

    aiChoiceHand();
    const result = checkResult(dataAboutHands.playerHand, dataAboutHands.aiHand);
    publishResult(dataAboutHands.playerHand, dataAboutHands.aiHand, result);
    endGame();

}

startGame.addEventListener('click', playGame)

handsData.forEach((handData)=>{
    handData.addEventListener('click', chooseHand)
})


