function common(element){
    const firstSection=document.getElementById(element);
    firstSection.classList.add('hidden');
}

function common1(element){
    const secondSection=document.getElementById(element);
    secondSection.classList.remove('hidden');
}



function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstwvxyz';
    const alphabets=alphabetString.split('');

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    return alphabet;
}