// function play(){
//     const homeSection=document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeyboard(event) {
    const playerPressed = event.key;
    if(playerPressed==="Escape"){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById("currentAlphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        console.log("you got a point");
        removeBackgroundById(expectedAlphabet);
        const currentScore = getTextValueById("currentScore");
        const result = currentScore + 1;
        setTextElementById('currentScore', result);

        // const CurrentScore=document.getElementById("currentScore");
        // const currentScoreText=CurrentScore.innerText;
        // const currentScoreConvert=parseInt(currentScoreText);
        // const result=currentScoreConvert+1;
        // CurrentScore.innerText=result;

        continueGame();
    }
    else {
        console.log("you loss a life");
        const currentLife = getTextValueById("currentLife");
        const result = currentLife - 1;
        setTextElementById('currentLife', result);
        if (result === 0) {
            gameOver();
        }

        // const CurrentLife=document.getElementById("currentLife");
        // console.log(CurrentLife);
        // const currentLifeText=CurrentLife.innerText;
        // const currentLifeConverted=parseInt(currentLifeText);
        // const result=currentLifeConverted-1;
        // CurrentLife.innerText=result;
    }
}


document.addEventListener("keyup", handleKeyboard);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    const currentAlphabet = document.getElementById("currentAlphabet");
    currentAlphabet.innerText = alphabet;

    setBackgroundById(alphabet);
}


function play() {
    common('home');
    common1('play-ground');
    common1("score");
    setTextElementById("currentScore",0);
    setTextElementById("currentLife",5);
    continueGame();
}

function gameOver() {
    common("play-ground");
    common1("score");

    const Score=getTextValueById("currentScore");
    setTextElementById("lastScore",Score);
}
