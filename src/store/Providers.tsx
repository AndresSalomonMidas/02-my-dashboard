'use client';

import { ReactNode, useEffect } from 'react';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { setFavoritePokemons } from './pokemons/pokemonsSlice';

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');

    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
