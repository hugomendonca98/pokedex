import styled from "styled-components";

import { PrimaryColor, SecundaryColor } from "../../global/styles/colors";

export const HomeStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background: #fff;

  a {
    text-decoration: none;
    width: 200px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  div {
    width: 200px;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    img {
      width: 100px;
      display: flex;
      justify-content: center;
      margin: auto;
    }

    p {
      text-align: center;
      background-color: red;
      color: ${PrimaryColor};
      background-color: ${SecundaryColor};
      padding: 5px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      font-family: Roboto, sans-serif;
      font-size: 17px;
      text-decoration: none;
    }
  }

  .lightbox {
    width: 800px;
  }
`;
