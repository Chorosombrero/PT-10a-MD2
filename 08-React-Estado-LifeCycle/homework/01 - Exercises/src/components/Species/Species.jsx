import React from "react";

export default function Species(props) {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((e, ind) => (
        <button key={ind} onClick={props.handleSpecies} value={e}>{e}</button>
      ))}
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  );
}
