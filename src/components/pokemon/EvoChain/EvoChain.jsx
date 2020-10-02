import React, { useEffect, useState } from "react";
import api from "../../../service/api";
import { ChainStyled } from "./styles";

import arrowRight from "../../../global/images/share.png";

function EvoChain({ evoPrimary, evoSecundary, evoLast }) {
  const [primaryImg, setPrimaryImg] = useState(null);
  const [secundaryImg, setSecundaryImg] = useState(null);
  const [lastImg, setLastImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const loading =
    "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";

  useEffect(() => {
    async function imageSprite() {
      const response = await api.get(`/pokemon/${evoPrimary.species.name}`);
      setPrimaryImg(response.data.sprites.front_default);
      const responseSec = await api.get(
        `/pokemon/${evoSecundary.species.name}`
      );
      setSecundaryImg(responseSec.data.sprites.front_default);
      if (evoLast) {
        const responseLast = await api.get(`/pokemon/${evoLast.species.name}`);
        setLastImg(responseLast.data.sprites.front_default);
      }
    }
    imageSprite();
  }, [evoLast, evoPrimary, evoSecundary, primaryImg]);

  function evolvesDetails(condition) {
    if (
      condition[1] !== null &&
      condition[1] !== "" &&
      condition[1] !== false
    ) {
      console.log(condition);
    }
  }

  return (
    <div key={evoLast}>
      <ChainStyled>
        <div>
          <img
            onLoad={() => setIsLoading(false)}
            src={isLoading === false ? primaryImg : loading}
            alt=""
          />
          <p>{`${evoPrimary.species.name.toUpperCase()}`}</p>
          {console.log(evoPrimary.evolves_to[0].evolution_details[0])}
          <p>
            {Object.entries(
              evoPrimary.evolves_to[0].evolution_details[0]
            ).map((condition) => evolvesDetails(condition))}
          </p>
        </div>
        <img
          id="arrow"
          onLoad={() => setIsLoading(false)}
          src={isLoading === false ? arrowRight : loading}
          alt=""
        />
        <div>
          <img
            onLoad={() => setIsLoading(false)}
            src={isLoading === false ? secundaryImg : loading}
            alt=""
          />
          <p>{`${evoSecundary.species.name.toUpperCase()}`}</p>
          <p>infos de evolução</p>
        </div>
        {evoLast && (
          <>
            <img id="arrow" src={arrowRight} alt="" />
            <div>
              <img
                onLoad={() => setIsLoading(false)}
                src={isLoading === false ? lastImg : loading}
                alt=""
              />
              <p>{`${evoLast.species.name.toUpperCase()}`}</p>
              <p>
                infos de evolução Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Placeat, ipsa aut.
              </p>
            </div>
          </>
        )}
      </ChainStyled>
    </div>
  );
}

export default EvoChain;
