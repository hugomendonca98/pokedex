import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import HeaderPokemon from "../../components/header-pokemon/index";
import { MDBProgress } from "mdbreact";
import { PokemonStyled } from "./styles";
import api from "../../service/api";

const Pokemon = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      const { pokemon } = props.match.params;
      const response = await api.get(`/${pokemon}`);
      setPokemonInfo([response.data]);
    }

    loadInfos();
  }, [props.match.params]);

  function backRouter(e) {
    e.preventDefault();
    props.history.goBack();
  }

  function attributeName(attr) {
    if (
      attr === "hp" ||
      attr === "attack" ||
      attr === "defense" ||
      attr === "speed"
    ) {
      return attr.toUpperCase();
    } else if (attr === "special-attack" || attr === "special-defense") {
      if (attr === "special-attack") {
        return "SP ATK";
      } else {
        return "SP DEF";
      }
    }
  }

  return (
    <>
      <HeaderPokemon />
      <PokemonStyled>
        <button onClick={backRouter}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
        {pokemonInfo.map((el) => (
          <div key={el.id}>
            <div className="card-flex">
              <div>
                <img src={el.sprites.front_default} alt="" />
              </div>
              <div className="infos">
                <div className="navegation">
                  <h1>{el.name}</h1>
                </div>
                <div className="types">
                  {el.types.map((pokeType) => (
                    <p
                      key={pokeType.type.name}
                      to={`/type/${pokeType.type.name}`}
                    >
                      {pokeType.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="align">
                {el.stats.map((pokeStats) => (
                  <div key={pokeStats.stat.name} className="stat">
                    <p id="align-stat">{attributeName(pokeStats.stat.name)}</p>
                    <MDBProgress
                      material
                      value={pokeStats.base_stat}
                      max={200}
                    />
                    <span>{pokeStats.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="weight">
              <p>Height: {el.height}</p>
              <p>weight: {el.weight}</p>
            </div>
            <div className="abilities">
              {el.abilities.map((ab) => (
                <p key={ab.ability.name}>Abilidade: {ab.ability.name}</p>
              ))}
            </div>
          </div>
        ))}
      </PokemonStyled>
    </>
  );
};

export default Pokemon;