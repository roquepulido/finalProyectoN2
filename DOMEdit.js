const Templates = [];
const letters = ["A","B","C","D"];

function initTemplates(){
    setTemplate("capital","capitalQ");
    setTemplate("button","buttonOption");
    setTemplate("flag","flagQ");
}

function setTemplate(name, id){
    const template = document.getElementById(id);
    Templates[name] = template;
}

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

function printFlagQTemplate(arrayPaises, nodo){
    const correctPosition = getRandomNumber(4);
    // const correctCountry = arrayPaises[correctPosition].name;
    const correctFlag = arrayPaises[correctPosition].flag;
    const nodoPregunta = document.importNode(Templates.flag.content,true);
    const nodoOptions = nodoPregunta.getElementById("options");

    nodoPregunta.getElementById("flagIMG").src = correctFlag;


    for(let i = 0 ; i < 4; i++){
        const nodoButton = document.importNode(Templates.button.content,true);
        const nodoButtonSpans = nodoButton.querySelectorAll("span");
        nodoButtonSpans[0].innerHTML = letters[i];
        nodoButtonSpans[1].innerHTML = arrayPaises[i].name;
        nodoOptions.appendChild(nodoButton);
        
    }
    const buttons = nodoOptions.querySelectorAll("button");
    buttons.forEach((button,i) => { button.setAttribute("value",i)
        
    });
    nodo.appendChild(nodoPregunta)
    
    return correctPosition;

}


function printCapitalQTemplate(arrayPaises, nodo){
    const correctPosition = getRandomNumber(4);
    // const correctCountry = arrayPaises[correctPosition].name;
    const correctCapital = arrayPaises[correctPosition].capital;
    const nodoPregunta = document.importNode(Templates.capital.content,true);
    const nodoOptions = nodoPregunta.getElementById("options");

    nodoPregunta.getElementById("question").innerHTML = `"${correctCapital}" is the capital of`;


    for(let i = 0 ; i < 4; i++){
        const nodoButton = document.importNode(Templates.button.content,true);
        const nodoButtonSpans = nodoButton.querySelectorAll("span");
        nodoButtonSpans[0].innerHTML = letters[i];
        nodoButtonSpans[1].innerHTML = arrayPaises[i].name;
        nodoOptions.appendChild(nodoButton);
        
    }
    const buttons = nodoOptions.querySelectorAll("button");
    buttons.forEach((button,i) => { button.setAttribute("value",i)
        
    });

    
    nodo.appendChild(nodoPregunta)
    
    return correctPosition;
}

function getTemplates(){
    return Templates;
}

export default {printCapitalQTemplate, getTemplates, setTemplate, initTemplates, printFlagQTemplate}