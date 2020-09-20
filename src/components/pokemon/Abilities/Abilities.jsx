import React from "react";

function Abilities({ ability }) {
  const textFormating = (text) => {
    return text.replace("-", " ").toUpperCase();
  };
  return (
    <div>
      <p>{`Ability Name: ${textFormating(ability)}`}</p>
    </div>
  );
}

export default Abilities;
