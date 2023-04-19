//import axios from "axios";
//const axios = require('axios');

const pokeApi = axios.create({
baseURL: 'https://pokeapi.co/api/v2',
});
var envio = "";
function enviar() {
pokeApi.get('pokemon/'+document.querySelector("#p").value)

.then(function (response) {
    console.log(response);
    const pokemon = response.data;
    console.log(pokemon);

    const textoHtml = `<h1>Pokemon</h1>
<br> <label>Nome:</label> ${pokemon.name} 
<br>
<br> <img src="${pokemon.sprites.front_default}" alt=".img" height="128px" width="128px">`;
    console.log(textoHtml);

    document.getElementById("it").innerHTML= textoHtml;
    
  })
}

