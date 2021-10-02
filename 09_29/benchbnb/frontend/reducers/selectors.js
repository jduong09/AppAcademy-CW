export const getAllBenches = state => {
  let benches = state.entities.benches;
  return Object.keys(benches).map(id => benches[id]);
};