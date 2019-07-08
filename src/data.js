//aquí van las funciones de filtrados
window.pokemons = {
  // Esta funcion filtra todos los pokemones por el tipo
  filterByType: (allPokemon, condition) => {
      let filtered = [];
      for (let i = 0; i < allPokemon.length; i++){
          for (let e = 0; e < allPokemon[i].type.length; e++) {
              if(allPokemon[i].type[e] === condition){
                  filtered.push(allPokemon[i]);
              }
          }
      }
      return filtered;
  },
  
}