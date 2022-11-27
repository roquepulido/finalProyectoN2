import r from "./request.js";
import gameCore from "./core_game.js";

// const countries = await r.getCountries();
// console.log(countries);
const countries = await fetch("./ExempleCountry.json").then(r=>r.json());
gameCore.initGameCore(countries);

console.log(gameCore.getQuestion());
console.log(gameCore.getQuestion());
console.log(gameCore.getQuestion());
console.log(gameCore.getQuestion());
console.log(gameCore.getQuestion());
console.log(gameCore.getQuestion());
console.log(gameCore.getQuestion());


