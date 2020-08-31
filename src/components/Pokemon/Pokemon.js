import React from "react";
import "./Pokemon.scss";

export default function Pokemon(props) {
  const ability = props.abilities.split(" ");
  return (
    <div className="card shadow-sm mb-4 .my-5 Pokemon">
      <div className="card-body pb-0">
        <h5 className="card-title"> {props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-4">
          Weight: {props.weight} kg
          <br />
          Terrifyting: {props.terrifying === "yes" ? "Very" : "nah, lovable"}
          <br />
          {ability.length} abilities
          <br />
          Abilities: {props.abilities}
        </p>
      </div>

      <ul className="list-group list-group-flush">
        {ability.map((ability, index) => {
          return (
            <li className="list-group-item" key={index}>
              {ability}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* <h2>Pokemon name: {props.name}</h2>
<p>Weight: {props.weight} kg</p>
<p>Awesome: {props.awesome === "yes" ? "YES!" : "nope, not really"}</p>
<p>Terrifying: {props.terrifying === "yes" ? "Very" : "nah, lovable"}</p>
<p>Abilities: {props.abilities} </p> */
