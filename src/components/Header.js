import "./Header.css";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

const Header = ({props}) => {
  // Destructure state to {basket}
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();   

  const handleSignOut = () => {
    if (user) {
      console.log('clicked!')
      auth.signOut().then(() => {
        history.go(0);
      })
      console.log('user: ', user)
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

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSignOut} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : `${props?.firstName} ${props?.lastName}`}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          {!user ? (
            ``
          ) : (
            <div className="header_option">
              <span className="header_optionLineOne">Order</span>
              <span className="header_optionLineTwo">History</span>
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
            <li className="dropdown">
              <Link to="/products" className="dropbtn">
                All Items
              </Link>
              <div className="dropdown-content">
                <Link to="/tops">Tops</Link>
                <Link to="/bottoms">Bottoms</Link>
                <Link to="/accessories">Accessories</Link>
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
