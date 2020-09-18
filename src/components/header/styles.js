import styled from 'styled-components';

import { PrimaryTextColor, PrimaryColor } from '../../global/styles/colors';

export const HeaderStyled = styled.header`
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    background-color: ${PrimaryColor};
    
    div {
        display: flex;
        align-items: center;
        width: 700px;
        margin: auto;
        padding-top: 10px;
        padding-bottom: 10px;

        div.logo {
            display: flex;
            align-items: center;
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

        div.search {
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
            width: 450px;
            height: 40px;
            border-radius: 5px;
            margin: none;
            padding: 0;

            svg {
                color: #ccc;
                font-size: 20px;
                margin-left: 7px;
                margin-right: 7px;
            }
            
            input {
                width: 400px;
                height: 40px;
                border-radius: 5px;
                padding-left: 4px;
                outline: 0;
                border: none;
            }
        }
    }

    @media (max-width: 740px) {
    
        div {
            flex-direction: column;
            flex-wrap: wrap;
            width: 300px;

            div.search {
                width: 300px;

                svg {
                    margin-top: 10px;
                }

                input {
                    width: 250px;
                }
            }
        }
    }

    @media (max-width: 340px) {
        div {
            flex-direction: column;
            flex-wrap: wrap;
            width: 200px;

            div.search {
                width: 200px;

                svg {
                    margin-top: 10px;
                }

                input {
                    width: 150px;
                }
            }
        }
    }

`