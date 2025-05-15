import PokemonList from '@/components/container/list';
import Pagination from '@/components/container/pagination';
import Loading from '@/components/ui/Loader';
import React from 'react';
import useHome from './useHome';

const Homeview = () => {
  const {
    pokemons,
    isLoading,
    isError,
    error,
    nextPage,
    prevPage,
    hasNext,
    hasPrev,
  } = useHome();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">Error: {error?.message}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon List</h1>
      <PokemonList pokemons={pokemons} />
      <Pagination
        onNext={nextPage}
        onPrev={prevPage}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
};

export default Homeview;
