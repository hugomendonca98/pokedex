import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../service/api";

function Evolutions({ specieUrl }) {
  const [teste, setTest] = useState(null);
  const [imageUrl, setImgageUrl] = useState([]);

  function fake(name) {
    async function pqp(name) {
      const response = await api.get(`/${name}`);
      [response.data].forEach((el) => {
        setImgageUrl(el.sprites.front_default);
      });
    }
    pqp(name);
    console.log(imageUrl);
  }

  useEffect(() => {
    async function evolutionChain() {
      const response = await axios.get(specieUrl);
      const evolutionInfos = await axios.get(response.data.evolution_chain.url);
      setTest(evolutionInfos.data.chain.evolves_to);
    }
    evolutionChain();
  }, [specieUrl]);
  return (
    <div>
      <p>evoluções:</p>
      {teste !== null &&
        // eslint-disable-next-line jsx-a11y/alt-text
        teste.map((el) => fake(el.species.name))}
      {console.log(imageUrl)}
    </div>
  );
}

export default Evolutions;
