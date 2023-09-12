import type { SimplePokemon } from '@/pokemons';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavoriteState {
  // Each key will match a pokemon id
  favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonsFavoriteState => {
//   // if (typeof window === 'undefined') return {}; Causes hydration problems

//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');

//   return favorites;
// };

const initialState: PokemonsFavoriteState = {
  favorites: {},
  // ...getInitialState()
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state.favorites[id]) {
        // If pokemon is already in favorites, remove it from the state.
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: BAD PRACTICE IN REDUX - TEMPORAL
      localStorage.setItem('favorite-pokemon', JSON.stringify(state.favorites));
    },
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
