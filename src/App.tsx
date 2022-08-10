import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./App.css";

function App() {
  const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    const json = await response.json();
    return json;
  };

  const { data } = useQuery(["pokemon"], getPokemons);

  console.log("data", data);

  return (
    <div className="App">
      {data &&
        data.results.map((pokemon: any, index) => (
          <div key={pokemon.name}>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.url}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              alt={pokemon.name}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
