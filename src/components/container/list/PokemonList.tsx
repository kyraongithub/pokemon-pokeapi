import { motion } from 'framer-motion';
import PokemonCard from '../card';
import { PokemonResult } from '@/interfaces/pokemon';

const PokemonList: React.FC<{ pokemons: PokemonResult[] }> = ({ pokemons }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </motion.div>
  );
};

export default PokemonList;
