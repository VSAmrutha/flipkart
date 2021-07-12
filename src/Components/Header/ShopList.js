import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function ShopList(props) {
  const [menuIndex, setMenuIndex] = useState(-1);
  const menuMenuClick = (index) => {
    index !== menuIndex ? setMenuIndex(index) : setMenuIndex(-1);
  };
  const { ShopLinks, listShop } = props;
  return (
    <>
      {ShopLinks.links.map((item, index) => {
        return (
          <ul key={item.name} className={styles.headerShopUL} onMouseEnter={() => menuMenuClick(index)}
            onMouseLeave={() => setMenuIndex(-1)}>
            <li className={listShop}>
              <span
                
                className={styles.megaMenuText}
              >
                {item.name}
                <span className={styles.arrowIcon}>
                  {menuIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </span>
              {menuIndex === index && (
                <ul className={styles.menuItemUL}>
                  {item.menuItem.map((menuitem) => {
                    return (
                      
                        <Link
                          className={styles.loginCartlink}
                          key={menuitem.name}
                          to={{
                            pathname: menuitem.link,
                          }}
                        >
                          <li className={styles.listShopItem}>
                            {menuitem.name} 
                          </li>{" "}
                        </Link>
                     
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>
        );
      })}
    </>
  );
}
