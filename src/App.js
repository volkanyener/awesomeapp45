import React from "react";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";

const all_pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: "yes",
    terrifying: "no",
    abilities: "Blaze, Solar power, Tough claws, Drought",
  },
  {
    name: "Bullbasaur",
    weight: 6.9,
    awesome: "yes",
    terrifying: "no",
    abilities: "Overgrow, Chlorophyll",
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: "yes",
    terrifying: "yes",
    abilities: "Pressure, Unnerve, Steadfast, Insomnia",
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: "no",
    terrifying: "yes",
    abilities: "Intimidate, Unnerve",
  },
];

function App() {
  return (
    <div className="App">
      <main className="container">
        <Title content="Pokemons are cool!" />
        <div className="row">
          {all_pokemons.map((pokemon) => {
            return (
              <div className="col-md-6 col-lg-4" key={pokemon.name}>
                <Pokemon
                  name={pokemon.name}
                  weight={pokemon.weight}
                  awesome={pokemon.awesome}
                  terrifying={pokemon.terrifying}
                  abilities={pokemon.abilities}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
