import r from "./request.js";
import gameCore from "./core_game.js";
import DOMEdit from "./DOMEdit.js";

// const countries = await r.getCountries();
// console.log(countries);
const countries = await fetch("./ExempleCountry.json").then(r => r.json());
let points = 0;
let correctOption = 0;
const numberQuertions = 5;
let actualGame = 1;
const gameFrame = document.getElementById("gameFrame");
const nextGame = () => {
    actualGame++;
    game();
};
const gameReset = () =>{
    actualGame = 1;
    game();
}
const checkAnswer = e => {
    e.preventDefault();
    let nextButton = document.getElementById("next");
    let buttons = document.getElementById("options").querySelectorAll("button");
    let position = e.submitter.value;

    if (position == correctOption) {
        points++;
        e.submitter.classList.add("correct");
        e.submitter.querySelector(".check").classList.remove("visually-hidden");



    } else {
        e.submitter.classList.add("wrong");
        e.submitter.querySelector(".cancel").classList.remove("visually-hidden");

        buttons.forEach((button, i) => {
            if (i == correctOption) {
                button.classList.add("correct");
                button.querySelector(".check").classList.remove("visually-hidden");
            }
        });
        nextButton.classList.remove("visually-hidden");
    }

    buttons.forEach((button, i) => {

        button.classList.add("disabled");

    });
    nextButton.classList.remove("visually-hidden");
    nextButton.addEventListener("click", nextGame);

}


function game() {
    gameFrame.innerHTML = "";
    if (actualGame <= numberQuertions) {
        console.log(`Puntos:${points} - turno: ${actualGame}`);
        correctOption = getQuestion("gameFrame");
        console.log(correctOption);

        document.addEventListener("submit", checkAnswer);
    } else {
        // poner el win
    }

}


function getQuestion(id) {
    let quetion = gameCore.getQuestion();

    let correct = "";

    let nodo = document.getElementById(id);

    if (quetion.typeQuestion == "capital") {
        correct = DOMEdit.printCapitalQTemplate(quetion.quetions, nodo);
    }
    else {
        correct = DOMEdit.printFlagQTemplate(quetion.quetions, nodo);
    }

    return correct;

}

gameCore.initGameCore(countries);
DOMEdit.initTemplates();
game();


