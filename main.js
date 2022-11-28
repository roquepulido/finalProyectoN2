import r from "./request.js";
import gameCore from "./core_game.js";
import DOMEdit from "./DOMEdit.js";

// const countries = await r.getCountries();
// console.log(countries);
const countries = await fetch("./ExempleCountry.json").then(r=>r.json());


gameCore.initGameCore(countries);
DOMEdit.initTemplates();

let quetion = gameCore.getQuestion();
console.log(quetion);

let nodo = document.getElementById("gameFrame");

 if(quetion.typeQuestion == "capital") DOMEdit.printCapitalQTemplate(quetion.quetions,nodo);
 else DOMEdit.printFlagQTemplate(quetion.quetions,nodo);

 document.getElementById("options").addEventListener("click",e =>{
    console.log(e);
 });



