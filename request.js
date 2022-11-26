const URL = "https://restcountries.com/v3.1/all";


async function getCountries(){
    return fetch(URL)
    .then(res => res.json())
    .then(res => res)
    .catch(error => console.error(error));
    }
    
    
    export default {getCountries}