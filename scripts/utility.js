function getTextValueById(elementId){
const element=document.getElementById(elementId);
const elementText=element.innerText;
const elementConverted=parseInt(elementText);
return elementConverted;
}

function setTextElementById(elementId,value){
const element=document.getElementById(elementId);
element.innerText=value;
}

function common(element){
    const firstSection=document.getElementById(element);
    firstSection.classList.add('hidden');
}

function common1(element){
    const secondSection=document.getElementById(element);
    secondSection.classList.remove('hidden');
}


function setBackgroundById(element){
    const setBackground=document.getElementById(element);
    setBackground.classList.add('bg-orange-500');
}
function removeBackgroundById(element){
    const setBackground=document.getElementById(element);
    setBackground.classList.remove('bg-orange-500');
}

function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstwvxyz';
    const alphabets=alphabetString.split('');

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    return alphabet;
}