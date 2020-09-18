import React from 'react';

import Logo from '../../global/images/pokebola-png-2.png';
import {HeaderPokemonStyled} from '../header-pokemon/styles';

const HeaderPokemon = () => {
    return (
        <>
        <HeaderPokemonStyled>
            <div>
                <div className="logo">
                    <img src={Logo} alt=""/>
                    <p>Pokedex</p>
                </div>
            </div>
        </HeaderPokemonStyled>
        </>
    );
}

export default HeaderPokemon;