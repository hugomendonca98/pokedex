import React, { useEffect, useState } from "react";

import api from "../../service/api";
import { HomeStyled } from "./styles";
import CardsPokemon from "../cards-pokemon/CardsPokemon";

const Content = (props) => {
  const [pokemonName, setPokemonName] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get("/pokemon?offset=0&limit=807");
      setPokemonName(response.data.results);
    }
    loadPokemons();
  }, []);

  const strainer =
    props.search !== ""
      ? pokemonName.filter((pokemon) => pokemon.name.includes(props.search))
      : pokemonName;

  return (
    <>
      <HomeStyled>
        <CardsPokemon strainer={strainer} />
      </HomeStyled>
    </>
  );
};

export default Content;
