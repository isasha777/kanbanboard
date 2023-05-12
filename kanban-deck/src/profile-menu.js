import React, { useState } from 'react';
import './styles.css'
import Arrowd from './arrow-down.png';
import Arrowu from './arrow-up.png';


function Profilemenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav">
      <div className="nav__items">
        <div className="nav__item nav__dropdown" onClick={toggleMenu}>
          {showMenu ? (
            <img src={Arrowu} alt="arrow-up" />
          ) : (
            <img src={Arrowd} alt="arrow-down" />
          )}
          {showMenu && (
            <div className="nav__dropdown-menu">
              <div className="nav__dropdown-item">Profile</div>
              <div className="nav__dropdown-divider" />
              <div className="nav__dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profilemenu;
