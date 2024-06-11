const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  function PokemonCard() {
      const pokemon = pokemonList[0];
  
      return (
          <div>
              <h1>Carte Pokémon</h1>
              <figure>
                  {pokemon.imgSrc ? (
                      <img src={pokemon.imgSrc} alt={`Image du Pokémon ${pokemon.name}`} />
                  ) : (
                      <p>???</p>
                  )}
                  <figcaption>
                      <p>{pokemon.name}</p>
                  </figcaption>
              </figure>
          </div>
      );
  }
  
  export default PokemonCard;
  
