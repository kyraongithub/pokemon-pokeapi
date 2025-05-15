import { PokemonResult } from '@/interfaces/pokemon';
import React from 'react';
import { motion } from 'framer-motion';

const PokemonCard: React.FC<{ pokemon: PokemonResult }> = ({ pokemon }) => {
  const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl"
    >
      <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={pokemon.name}
            className="w-32 h-32 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/pokemon-placeholder.png';
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-center mt-2 capitalize">
          {pokemon.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default PokemonCard;
