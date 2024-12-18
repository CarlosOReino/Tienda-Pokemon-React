import { useState, useEffect } from "react";

const useFetch = () => {
  const [searchData, setSearchData] = useState([]);
  

  // Recoge la info del pokemon (predeterminado está "Pikachu")
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=18&offset=0`)
      .then((res) => res.json())
      .then((res) => setSearchData(res.results));
  }, []);

  return [searchData];
};

export default useFetch;
