import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovesStyled } from "./styles";

function Moves({ moveName, levelLearned, learnMethod, gameVersion, moveUrl }) {
  const [accuracy, setAccuracy] = useState("");
  const [pp, setPp] = useState("");
  const [power, setPower] = useState("");

  const textUpper = (text) => {
    return text.replace("-", " ").toUpperCase();
  };

  useEffect(() => {
    async function movesInfos() {
      const response = await axios.get(`${moveUrl}`);
      setAccuracy(response.data.accuracy);
      setPower(response.data.power);
      setPp(response.data.pp);
    }

    movesInfos();
  }, [accuracy, moveUrl]);

  return (
    <MovesStyled>
      <section>
        <div>
          <p>{`Move Name: ${textUpper(moveName)}`}</p>
          <p>{`Level Learned: ${levelLearned}`}</p>
          <p>{`Accuracy: ${accuracy === null ? "0" : accuracy}`}</p>
        </div>
        <div>
          <p>{`Learn Method: ${textUpper(learnMethod)}`}</p>
          <p>{`PP: ${pp}`}</p>
          <p>{`Power: ${power}`}</p>
        </div>
      </section>
    </MovesStyled>
  );
}

export default Moves;
