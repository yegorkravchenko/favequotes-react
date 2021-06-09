import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <p className="Header__logo">favequotes</p>
        <nav className="Header__nav Nav">
          <ul className="Nav__list">
            <li className="Nav__list-item">
              <NavLink
                className="Nav__link"
                exact
                to="/"
                activeClassName="Nav__link--active"
              >
                Random
              </NavLink>
            </li>
            <li className="Nav__list-item">
              <NavLink
                className="Nav__link"
                exact
                to="/all"
                activeClassName="Nav__link--active"
              >
                All
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
