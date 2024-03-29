import React, { useState } from "react";
import Logo from "../../images/logoflipkart.png";
import styles from "./Header.module.css";
import LoginCart from "./LoginCart";
import ShopList from "./ShopList";
import { FaSearch, FaWater, FaWindowClose } from "react-icons/fa";
import { connect } from "react-redux";
import ShopLinks from "../../Contants/headerlist.js";
import { Link } from "react-router-dom";

const Header = ({ closeHandler, loggedIn, login, resetHandler, cart }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <header style={{ position: "relative" }}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Link to="/">
            <img src={Logo} alt="logo" className={styles.headerLeft_logo} />
          </Link>
          <div className={styles.inputForm}>
            <input
              type="text"
              name="search"
              // value="search"
              className={styles.header_input}
            />
            <div className={styles.faSearch}>
              <FaSearch />
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <LoginCart
            mainLoginDiv={styles.mainLoginDiv}
            loginClass="whiteButton"
            cartClass="plainButton"
            loginClick={closeHandler}
            loggedIn={loggedIn}
            login={login}
            resetHandler={resetHandler}
            cart={cart}
          />
        </div>
        {/* ------------------Humberger for mobile---------------- */}
        <div className={styles.headerRightMobile}>
          {!showMobileMenu ? (
            <div
              className={styles.whiteButtonIcon}
              onClick={showMobileMenuHandler}
            >
              <FaWater />
            </div>
          ) : (
            <div
              className={styles.whiteButtonIcon}
              onClick={showMobileMenuHandler}
            >
              <FaWindowClose />
            </div>
          )}
        </div>
        {/* -------------------Humberger for mobile ends------------------*/}
      </div>
      {showMobileMenu && (
        <div className={styles.menuOpen}>
          <LoginCart
            mainLoginDiv={styles.mainLoginDivMob}
            loginClass="blueButton"
            cartClass="bluePlainButton"
            loginClick={closeHandler}
            loggedIn={loggedIn}
            login={login}
            resetHandler={resetHandler}
            cart={cart}
          />
          <div className={styles.headerShopMobile}>
            <ShopList ShopLinks={ShopLinks} listShop={styles.listShopMobile} />
          </div>
        </div>
      )}
      <div className={styles.headerShop}>
        <ShopList ShopLinks={ShopLinks} listShop={styles.listShop} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    showLogin: state.showLogin,
    login: state.login,
    loggedIn: state.loggedIn,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeHandler: () => dispatch({ type: "SHOW_LOGIN" }),
    resetHandler: () => dispatch({ type: "RESET" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
