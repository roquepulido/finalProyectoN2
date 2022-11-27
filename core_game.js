/**
 * Almacena los objetos con Nombre de pais, capital y direccion de bandera
 */
const DBGame =[];

/**
 * Guarda los datos extraidos de la API (name, capital y flag) en el arreglo DBGame
 * @param {Array} objs array de paises obtenidos de la API
 */
function initGameCore(objs){
    let paisesInfo = jsonToGameArray(objs);
    DBGame.push(...paisesInfo);    
}

/**
 * Convierte la respuesta de la API en arreglo de Objetos
 * @param {Array} objs array con los bjetos (paises) de la API 
 */
function jsonToGameArray(objs){
    const countries = objs.map(obj =>{
     let name = obj.name.common;
     let capital = obj.capital&&obj.capital[0];
     let flag = obj.flags.svg;

     return {name, capital , flag};

    });

    
    console.log("Se cargaron "+ countries.length + " paises al array.")
    return countries;
}
function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

function getDB(){return DBGame}

function getRandomCapital(){
    const number = getRandomNumber(DBGame.length);
    const name = DBGame[number].name;
    const capital = DBGame[number].capital;
    
    return {name,capital}
}

function getRandomFlag(){
    const number = getRandomNumber(DBGame.length);
    const name = DBGame[number].name;
    const flag = DBGame[number].flag;
    
    return {name,flag}
}

function getCapitalOptions(){
    const capitalQuestion = [];

    for(let i = 0 ; i < 4; i++) capitalQuestion.push(getRandomCapital());
   
    return capitalQuestion;
}

function getFlagOptions(){
    const flagQuestion = [];

    for(let i = 0 ; i < 4; i++) flagQuestion.push(getRandomFlag());
   
    return flagQuestion;

}
function getQuestion(){
    const randomNumber = getRandomNumber(2);
    const quetions =[];
    let typeQuestion =""

    if (randomNumber === 1){
        typeQuestion = "capital";
        quetions.push(...getCapitalOptions());        
    }else{
        typeQuestion = "flag";
        quetions.push(...getFlagOptions());
    }   
    
    return {typeQuestion, quetions}}


 export default {initGameCore,getQuestion}