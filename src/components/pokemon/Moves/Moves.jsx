import React from "react";

function Moves({ moveName, levelLearned, learnMethod, gameVersion }) {
  return (
    <div>
      <p>{`Move Name: ${moveName}`}</p>
      <p>{`Level Learned: ${levelLearned}`}</p>
      <p>{`Level Method: ${learnMethod}`}</p>
      <p>{`Game Version: ${gameVersion}`}</p>
    </div>
  );
}

export default Moves;
