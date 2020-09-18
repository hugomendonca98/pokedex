import styled from "styled-components";

import { SecundaryColor, PrimaryTextColor } from "../../global/styles/colors";

export const PokemonStyled = styled.div`
  button {
    border: none;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    font-size: 17px;
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px 20px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    svg {
      margin-right: 10px;
    }
  }

  .navegation {
    margin-bottom: 40px;
    margin-top: 40px;
    color: ${PrimaryTextColor};

    h1 {
      font-family: Roboto, sans-serif;
      color: ${PrimaryTextColor};
    }
  }

  .card-flex {
    display: flex;
    justify-content: center;
  }

  div {
    img {
      width: 200px;
    }
  }

  div.infos {
    font-family: Roboto, sans-serif;
    div.types {
      display: flex;
      margin-top: 20px;

      p {
        text-decoration: none;
        padding: 5px 10px;
        color: #fff;
        background-color: ${SecundaryColor};
        border-radius: 3px;
        margin-right: 5px;
      }
    }
  }

  .stats {
    .stat {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding: 5px;

      #align-stat {
        font-family: Roboto, sans-serif;
        width: 130px;
      }

      span {
        margin-left: 10px;
        width: 20px;
      }
    }
  }

  .align {
    width: 350px;
    margin: auto;
  }

  .progress-bar {
    background-color: ${SecundaryColor};
    color: white;
    height: 20px !important;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .progress {
    background-color: #e9ecef;
    border-radius: 3px;
    height: 20px !important;
    width: 200px;
  }

  .weight,
  .abilities {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    p {
      margin: 10px;
      font-family: Roboto, sans-serif;
      font-weight: 400;
      background-color: ${SecundaryColor};
      color: #fff;
      padding: 5px 10px;
      border-radius: 3px;
    }
  }

  @media (max-width: 377px) {
    .card-flex {
      flex-wrap: wrap;
      margin-right: 10px;
      margin-left: 10px;
      align-items: center;
    }

    .navegation {
      margin-bottom: 20px;
      margin-top: 5px;
    }

    .stats {
      .align {
        width: 200px;
        margin-top: 20px;

        div.stat {
          p {
          }

          #align-stat {
            width: 300px;
          }

          .progress {
            width: 100px;
          }
        }
      }
    }
  }
`;
