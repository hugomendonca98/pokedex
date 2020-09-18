import React, { useState } from "react";
import Logo from "../../global/images/pokebola-png-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { HeaderStyled } from "./styles";
import HomeContent from "../home-content/index";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <HeaderStyled>
        <div>
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Pokedex</p>
          </div>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input
              onChange={search}
              type="text"
              placeholder="Pesquisar Pokemon.."
            ></input>
          </div>
        </div>
      </HeaderStyled>
      <HomeContent search={searchValue} />
    </>
  );
};

export default Header;
