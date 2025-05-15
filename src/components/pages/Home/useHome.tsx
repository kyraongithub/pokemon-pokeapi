import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { getPokemons } from './helper';
import { PokemonListResponse } from '@/interfaces/pokemon';

const useHome = () => {
  const [offset, setOffset] = useState<number>(0);
  const limit = 10;

  const getPokemonsList = useCallback(async () => {
    const response = await getPokemons(offset, limit);
    return response;
  }, [offset, limit]);

  const { data, isLoading, isError, error } = useQuery<PokemonListResponse>({
    queryKey: ['pokemons', offset],
    queryFn: getPokemonsList,
  });

  const nextPage = () => {
    if (data?.next) {
      setOffset((prev) => prev + limit);
    }
  };

  const prevPage = () => {
    if (data?.previous) {
      setOffset((prev) => Math.max(0, prev - limit));
    }
  };

  return {
    pokemons: data?.results || [],
    isLoading,
    isError,
    error,
    nextPage,
    prevPage,
    hasNext: !!data?.next,
    hasPrev: !!data?.previous,
  };
};

export default useHome;
