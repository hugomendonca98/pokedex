import React, { useEffect, useState } from "react";

import api from "../../../service/api";

function Evolutions({ url }) {
  const [chain, setChain] = useState([]);

  useEffect(() => {
    async function evolutionChain() {
      const shortUrl = url.replace("https://pokeapi.co/api/v2", "");
      const response = await api.get(shortUrl);
      const evolutionChainUrl = response.data.evolution_chain.url.replace(
        "https://pokeapi.co/api/v2",
        ""
      );
      const resChain = await api.get(evolutionChainUrl);
      setChain(resChain.data.chain);
    }
    evolutionChain();
  }, [url]);

  return (
    <div>
      {chain.evolves_to !== undefined &&
        chain.evolves_to.map((el) => (
          <div key={el.species.name}>
            {el.evolves_to.length > 0 ? (
              el.evolves_to.map((evolution) => (
                <p
                  key={evolution.species.name}
                >{`${chain.species.name} -> ${el.species.name} -> ${evolution.species.name}`}</p>
              ))
            ) : (
              <p>{`${chain.species.name} -> ${el.species.name}`}</p>
            )}
          </div>
        ))}
    </div>
  );
}

export default Evolutions;
