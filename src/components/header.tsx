import React from "react";
import pokeLogo from "../images/pokeapi_256.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="leftSide">
            <h1>
              <NavLink to="/">
                <img src={pokeLogo} alt="Poke Api Logo" />
              </NavLink>
            </h1>
          </div>
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
