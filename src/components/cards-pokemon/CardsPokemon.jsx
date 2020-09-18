import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardsPokemon = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const loadingUrl = `https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif`;

  if (props.strainer) {
    return (
      <>
        {props.strainer.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <div key={pokemon.name}>
              <img
                onLoad={() => setIsLoading(false)}
                src={
                  isLoading === false
                    ? pokemonImg + pokemon.url.split("/")[6] + ".png"
                    : loadingUrl
                }
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </>
    );
  }
};

export default CardsPokemon;
