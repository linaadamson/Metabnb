// STYLES
import "./Navbar.css";

// IMPORTS
import { NavLink } from "react-router-dom";

// ASSETS
import Logo from "../assets/logo.svg";

export default function Navbar({ handleModal, handleClick, isShowing }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="metabnb logo" />
      </div>

      <ul className={isShowing ? "nav-items nav-open" : "nav-items"}>
        <div>
          <li onClick={handleClick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/place">Place to stay</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/nfts">NFTs</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/community">Community</NavLink>
          </li>
        </div>

        <li>
          <div
            className="connect-btn"
            onClick={() => {
              handleClick();
              handleModal();
            }}
          >
            Connect wallet
          </div>
        </li>
      </ul>

      {/* BURGER MENU */}
      <div
        className={isShowing ? "burger toggle" : "burger"}
        onClick={handleClick}
      >
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </div>
    </nav>
  );
}
