/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            {pokemon.imgSrc && <img src={pokemon.imgSrc} alt={pokemon.name} />}
        </div>
    );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};

export default PokemonCard;
