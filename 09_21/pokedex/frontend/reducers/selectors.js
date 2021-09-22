export const selectAllPokemon = (state) => {
  const pokemonHash = state.entities.pokemon
  return Object.values(pokemonHash);
};