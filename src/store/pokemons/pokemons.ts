import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/src/pokemons';

interface PokemonsFavoriteState {
    favorites: {[key: string]: SimplePokemon},
}

// const getInitialState = () => {
//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonsFavoriteState = {
    favorites: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
        state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const {id} = pokemon;
        if(!!state.favorites[id]) {
            delete state.favorites[id];
            return
        }
        state.favorites[id] = pokemon;

  }}
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer