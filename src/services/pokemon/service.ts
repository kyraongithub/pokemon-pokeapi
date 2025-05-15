import api from '../api';
import pokemonEndpoints from './endpoints';

const getPokemons = async (offset: number, limit: number) => {
  const response = await api.get(pokemonEndpoints.getPokemons(offset, limit));
  return response.data;
};

const services = {
  getPokemons,
};

export default services;
