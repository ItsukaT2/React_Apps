import React, { useEffect, useState } from "react";
import api from "./api";

export default function Poke() {

  const [pokemon, setUser] = useState('');

  useEffect(() => {
    api
      .get("pokemon/"+document.querySelector("#nome"))
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        console.log(JSON.stringify(this.state.texto));
      });
  }, []);

  return (
    <div className="Poke">
      <h1>Pokemon</h1>
      <p>Nome: {pokemon?.name}</p>
      <img src= {pokemon?.image} alt="pokemon"
      lt=".img" height="128px" width="128px"></img>
    </div>
  );
}