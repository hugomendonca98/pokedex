import React from "react";
import { MovesStyled } from "./styles";

function Moves({ moveName, levelLearned, learnMethod, gameVersion }) {
  const textUpper = (text) => {
    return text.replace("-", " ").toUpperCase();
  };

  return (
    <MovesStyled>
      <section>
        <div>
          <p>{`Move Name: ${textUpper(moveName)}`}</p>
          <p>{`Level Learned: ${levelLearned}`}</p>
        </div>
        <div>
          <p>{`Learn Method: ${textUpper(learnMethod)}`}</p>
          <p>{`Game Version: ${textUpper(gameVersion)}`}</p>
        </div>
      </section>
    </MovesStyled>
  );
}

export default Moves;
