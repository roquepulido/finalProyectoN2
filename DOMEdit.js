const Templates = [];
const letters = ["A","B","C","D"];

function initTemplates(){
    setTemplate("capital","capitalQ");
    setTemplate("button","buttonOption");
}

function setTemplate(name, id){
    const template = document.getElementById(id);
    Templates[name] = template;
}

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

function printCapitalQ(arrayPaises, nodo){
    const correctPosition = getRandomNumber(4);
    const correctCountry = arrayPaises[correctPosition].name;
    const correctCapital = arrayPaises[correctPosition].capital;
    console.log(arrayPaises);
    console.log(correctCountry);
    const html = `
    
    <h1 class="title fw-bold text-uppercase">Country quiz</h1>

    <div id="quizzFrame" class="position-relative rounded-5 pt-5">
      <img
        class="position-absolute top-0 end-0 translate-middle-y"
        src="./img/undraw_adventure_4hum 1.svg"
        alt="adventure"
      />
      <div class="container pt-4">
        <p class="fw-bold fs-4 text-center" id="question">
          "${correctCapital}" is the capital of
        </p>
        <div id="options" class="row">
          <button
            id="q1"
            class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start"
          >
            <span class="letter fs-4 me-5"> A </span>
            <span class="answer">${arrayPaises[0].name}</span>
          </button>

          <button
            id="q2"
            class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start"
          >
            <span class="letter fs-4 me-5"> B </span>
            <span class="answer">${arrayPaises[1].name}</span>
          </button>

          <button
            id="q3"
            class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start position-relative"
          >
            <span class="letter fs-4 me-5">C</span>
            <span class="answer">${arrayPaises[2].name}</span>
          </button>

          <button
            id="q4"
            class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start position-relative"
          >
            <span class="letter fs-4 me-5">D</span>
            <span class="answer">${arrayPaises[3].name}</span>
          </button>
        </div>
      </div>
      <div class="row justify-content-end">
        <button class="btn text-center me-5 my-4" id="next">Next</button>
      </div>
    </div>
  
    `
    nodo.innerHTML = html;
}

function printFlagQ(arrayPaises, nodo){
    const correctPosition = getRandomNumber(4);
    const correctCountry = arrayPaises[correctPosition].name;
    const correctFlag = arrayPaises[correctPosition].flag;
    console.log(arrayPaises);
    console.log(correctCountry);
    const html = `
    <h1 class="title fw-bold text-uppercase">Country quiz</h1>

        <div id="quizzFrame" class="position-relative rounded-5 pt-5">
          <img
            class="position-absolute top-0 end-0 translate-middle-y"
            src="./img/undraw_adventure_4hum 1.svg"
            alt="adventure"
          />
          <div class="container pt-4">
            <img
              class="w-25 mb-3 ms-4"
              src="${correctFlag}"
              alt="Flag"
            />
            <p class="fw-bold fs-4 ms-4" id="question">
              Which country does this flag belong to?
            </p>
            <div id="options" class="row">
              <button  id="q1"
                class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start"
              >
                <span class="letter fs-4 me-5">A</span>
                <span class="answer">${arrayPaises[0].name}</span>
              </button>

              <button id="q2"
                class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start"
              >
                <span class="letter fs-4 me-5">B</span>
                <span class="answer">${arrayPaises[1].name}</span>
              </button>
              <button id="q3"
                class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start position-relative"
              >
                <span class="letter fs-4 me-5">C</span>
                <span class="answer">${arrayPaises[2].name}</span>
              </button>
              <button id="q4"
                class="btn btn-outline-primary my-3 mx-auto rounded-4 text-start position-relative"
              >
                <span class="letter fs-4 me-5">D</span>
                <span class="answer">${arrayPaises[3].name}</span>
              </button>
            </div>
          </div>
          <div class="row justify-content-end">
            <button class="btn text-center me-5 my-4" id="next">Next</button>
          </div>
        </div>
    
  
    `
    nodo.innerHTML = html;
}

function printCapitalQTemplate(arrayPaises, nodo){
    const correctPosition = getRandomNumber(4);
    const correctCountry = arrayPaises[correctPosition].name;
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
    nodo.appendChild(nodoPregunta)
    
    return correctCountry;
}

function getTemplates(){
    return Templates;
}

export default {printCapitalQ,printFlagQ,printCapitalQTemplate, getTemplates, setTemplate, initTemplates}