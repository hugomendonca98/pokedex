import styled from 'styled-components';

import { PrimaryColor, PrimaryTextColor } from '../../global/styles/colors';

export const HeaderPokemonStyled = styled.div`
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    background-color: ${PrimaryColor};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding-top: 10px;
        padding-bottom: 10px;

        div.logo {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-family: Roboto, sans-serif;
            font-weight: bold;
            color: ${PrimaryTextColor};

            img {
                width: 40px;
                height: 40px;
                margin-right: 5px;
            }
        }
    }
`