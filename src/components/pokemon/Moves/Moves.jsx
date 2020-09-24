import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovesStyled } from "./styles";

function Moves({ moveName, levelLearned, learnMethod, moveUrl }) {
  const [type, setType] = useState("");

  const textUpper = (text) => {
    return text.replace("-", " ").toUpperCase();
  };

  useEffect(() => {
    async function movesInfos() {
      const response = await axios.get(`${moveUrl}`);
      setType(response.data.type.name);
    }

    movesInfos();
  }, [moveUrl]);

  return (
    <MovesStyled>
      <section className={type}>
        <div>
          <p>{textUpper(moveName)}</p>
          <p>{textUpper(type)}</p>
        </div>
      </section>
    </MovesStyled>
  );
}

export default Moves;
