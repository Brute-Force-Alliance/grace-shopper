import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

const Header = () => {
  // Destructure state to {basket}
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt="LOGO"
          src="https://i.ibb.co/3YR06S2/BFA-logo.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to='/orders'>
        {!user ? (
          ``
        ) : (
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          )}
        </Link>

        {/* {!user ? (
          ``
        ) : (
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        )} */}

        {!user ? (
          ``
        ) : (
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">BFA</span>
          </div>
        )}
        <div className="header_option">
          {/* <span className="header_optionLineOne">Browse</span>
          <span className="header_optionLineTwo">Items</span> */}
          <ul>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">All Items</a>
              <div class="dropdown-content">
                <a href="#">Shirts</a>
                <a href="#">Shorts/Pants</a>
                <a href="#">Accessories</a>
              </div>
            </li>
          </ul>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
