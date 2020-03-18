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
          <div className="rightSide">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
                <ul>
                  <li>
                    <NavLink to={`/about/pokeapi`}>Poke Api</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/about/aboutme`}>About Me</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
