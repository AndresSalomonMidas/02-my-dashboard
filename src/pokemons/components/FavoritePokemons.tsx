'use client';

import { useAppSelector } from '@/store';
// import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { PokemonGrid } from './PokemonGrid';

export const NoFavorites = () => (
  <div className='flex flex-col items-center justify-center h-[50vh]'>
    <IoHeartOutline size={150} className='text-red-500' />
    <span className='text-5xl my-2'>No hay favoritos</span>
  </div>
);

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));
  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <>
      {favoritePokemons.length === 0
        ? <NoFavorites />
        : <PokemonGrid pokemons={favoritePokemons} />
      }
    </>
  );
};
