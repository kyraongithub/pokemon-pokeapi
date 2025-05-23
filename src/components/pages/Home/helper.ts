import services from '@/services/pokemon/service';

export const getPokemons = async (offset: number, limit: number) => {
  try {
    return await services.getPokemons(offset, limit);
  } catch (err: Error | unknown) {
    console.log(err);
    throw Error('error fetching pokemons');
  }
};

export default { getPokemons };
