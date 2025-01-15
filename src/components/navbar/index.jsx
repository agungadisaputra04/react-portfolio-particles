import React, { useState, useEffect } from "react";
import { GiCog } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import {data} from "./data.js"
import "./style.scss";


const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggleIcon(false);
  }, [location]);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <GiCog size={22} />
          </Link>
        </div>


        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={22} /> : <FaBars size={22} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
