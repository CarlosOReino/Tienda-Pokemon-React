import { useEffect, useState } from "react";

const useFetch = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fetchAllPokemon = async () => {
      let allPokemon = [];
      let url = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        allPokemon = data.results;
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
      setSearchData(allPokemon);
    };

    fetchAllPokemon();
  }, []);

  return [searchData];
};

export default useFetch;
