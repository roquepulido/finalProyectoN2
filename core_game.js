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

// function getRandomCapital{}


 export default {initGameCore, getDB, getRandomNumber}