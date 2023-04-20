import React, { useEffect, useState } from "react";
import api from "./api";


export default function Poke() {

  const [pokemon,setUser] = useState('');

  
  useEffect(() => {
    api
      .get("pokemon/"+document.querySelector("#nome").value)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        console.log(JSON.stringify(this.state.texto));
  
      });
  }, []);
  

  return (
    <div className="Poke">
      <h1>Pokemon</h1>
      <p>Name: {pokemon?.name}</p>
      <p>ID: {pokemon?.id}</p>
      <p>Type: {pokemon?.types?.map((item) => item.type.name.concat(' | '))}</p>
      <img 
      src={pokemon?.sprites?.front_default}
      alt={pokemon?.name}
      lt=".img" height="128px" width="128px"/>
      <div>
        <p>shiny image: </p>
        <img 
      src={pokemon?.sprites?.front_shiny}
      alt={pokemon?.name}
      lt=".img" height="128px" width="128px"/>
      </div>
    </div>
  );
}