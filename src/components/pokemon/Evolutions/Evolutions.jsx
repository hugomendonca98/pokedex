import React, { useEffect, useState } from "react";

import api from "../../../service/api";
import EvoChain from "../EvoChain/EvoChain";

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

  function evolvesDetails(condition) {
    if (
      condition[1] !== null &&
      condition[1] !== "" &&
      condition[1] !== false
    ) {
      if (condition[0] === "trigger" && condition[1].name === "use-item") {
      } else if (condition[0] === "trigger") {
        return <p>{condition[1].name}</p>;
      }
      if (condition[0] === "item")
        return <p>{`Evolves using item ${condition[1].name.toUpperCase()}`}</p>;
    }
  }

  return (
    <div>
      {console.log(chain)}
      {chain.evolves_to !== undefined &&
        chain.evolves_to.map((el) => (
          <div key={el.species.name}>
            {el.evolves_to.length > 0 ? (
              el.evolves_to.map((evolution) => (
                <EvoChain
                  key={evolution.species.name}
                  evoPrimary={chain.species.name}
                  evoSecundary={el.species.name}
                  evoLast={evolution.species.name}
                />
              ))
            ) : (
              <div>
                <p>{`${chain.species.name} -> ${el.species.name}`}</p>
                {el.evolution_details.map((details) =>
                  Object.entries(details).map((condition) =>
                    evolvesDetails(condition)
                  )
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Evolutions;
