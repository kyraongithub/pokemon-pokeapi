const pokemonEndpoints = {
  getPokemons: (offset: number = 10, limit: number = 10) =>
    `/pokemon/?offset=${offset}&limit=${limit}`,
};

export default pokemonEndpoints;
