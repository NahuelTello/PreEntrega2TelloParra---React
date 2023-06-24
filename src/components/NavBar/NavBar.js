import "./styles.css";

import { Link } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
  
        <Link className="li" to="/category/Alien">
          Alien
        </Link>
        <Link className="li" to="/category/Human">
          Human
        </Link>
        <Link className="li" to="/">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
