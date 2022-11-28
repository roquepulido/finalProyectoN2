import r from "./request.js";
import gameCore from "./core_game.js";
import DOMEdit from "./DOMEdit.js";

// const countries = await r.getCountries();
// console.log(countries);
const countries = await fetch("./ExempleCountry.json").then(r=>r.json());


gameCore.initGameCore(countries);

let quetion = gameCore.getQuestion();
console.log(quetion);

let nodo = document.getElementById("gameFrame");

// if(quetion.typeQuestion == "capital") DOMEdit.printCapitalQ(quetion.quetions,nodo);
// else DOMEdit.printFlagQ(quetion.quetions,nodo);

DOMEdit.initTemplates();

console.log(DOMEdit.getTemplates());

DOMEdit.printCapitalQTemplate(quetion.quetions,nodo);




