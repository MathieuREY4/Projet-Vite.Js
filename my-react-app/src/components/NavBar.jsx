import PropTypes from "prop-types";

const NavBar = ({ pokemonIndex, handlePrevious, handleNext, pokemonList }) => {
    return (
        <div className="nav-bar">
            {pokemonIndex > 0 && <button className="nav-button" onClick={handlePrevious}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button className="nav-button" onClick={handleNext}>Suivant</button>}
        </div>
    );
};

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    handlePrevious: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
};

export default NavBar;
