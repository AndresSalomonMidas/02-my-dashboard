import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const localStorageMiddleware = (state: MiddlewareAPI) => (
  next: Dispatch,
) => (
  action: Action,
) => {
  next(action);

  if (action.type === 'pokemons/toggleFavorite') {
    const { pokemons } = state.getState();
    localStorage.setItem('favorite-pokemon', JSON.stringify(pokemons));
  }
};
