import React from "react";

function EvoChain({ evoPrimary, evoSecundary, evoLast }) {
  return (
    <div>
      <p>{`${evoPrimary} -> ${evoSecundary}`}</p>
      <p>{`${evoSecundary} -> ${evoLast}`}</p>
    </div>
  );
}

export default EvoChain;
