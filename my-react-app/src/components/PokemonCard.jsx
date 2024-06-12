/* eslint-disable react/prop-types */
function PokemonCard({ pokemon }) {
    console.log(pokemon);

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

