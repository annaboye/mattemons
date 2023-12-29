import axios from "axios";
import { IPokemon } from "../models/IPokemon";

export async function getPokemons(): Promise<IPokemon[]> {
  const randomOffset = Math.floor(Math.random() * 60);
  try {
    const response = await axios.post(
      "https://beta.pokeapi.co/graphql/v1beta",
      {
        query: `
          query PokeAPIQuery($limit: Int, $offset: Int) {
            all_species: pokemon_v2_pokemonspecies(
              where: { 
                evolves_from_species_id: { _is_null: false }
              },
              limit: $limit,
              offset: $offset
            ) {
              name
              id
              evolves_from_species_id
            }
          }
        `,
        variables: {
          limit: 5,
          offset: randomOffset,
        },
        operationName: "PokeAPIQuery",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const pokemonData: IPokemon[] = response.data.data.all_species;
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}
