// function play(){
//     const homeSection=document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    const alphabet=getARandomAlphabet();
    // console.log(alphabet);

    const currentAlphabet=document.getElementById("currentAlphabet");
    currentAlphabet.innerText=alphabet;

    setBackgroundById(alphabet);
}


function play(){
common('home');
common1('play-ground');
continueGame(); 
}
