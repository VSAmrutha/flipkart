import React,{ useState } from "react";
import Logo from "../../images/logoflipkart.png";
import styles from "./Header.module.css";
import LoginCart from "./LoginCart";
import ShopList from "./ShopList";
import { FaSearch, FaWater, FaWindowClose } from "react-icons/fa";

import ShopLinks from "../Contants/headerlist.js";

// function main(input) {
//   // Write your code here
//   let days = 2
//   let pattern = [1, 1, 1, 0, 1, 1, 1, 1]
//   outPattern = []
//   console.log(input)
//   for (let i = 0; i <= days; i++) {
//     let p = []
//     if (pattern[i - 1] !== pattern[i + 1]) {
//       p.push(1)
//     } else {
//       p.push(0)
//     }
//     outPattern = [...p]
//     p = []
//   }
// }
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={Logo} alt="logo" className={styles.headerLeft_logo} />
          <div className={styles.inputForm}>
            <input
              type="text"
              name="search"
              value="search"
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
export default Header;
