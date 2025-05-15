import services from '@/services/pokemon/service';

export const getPokemons = async (offset: number, limit: number) => {
  try {
    return await services.getPokemons(offset, limit);
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export default { getPokemons };
