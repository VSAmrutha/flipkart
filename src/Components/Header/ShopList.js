import React,{ useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import styles from "./Header.module.css";

export default function ShopList(props) {
  const [menuIndex, setMenuIndex] = useState(-1);
  const menuMenuClick = (index) => {
    index !== menuIndex ? setMenuIndex(index) : setMenuIndex(-1);
    console.log(index);
  };
  const { ShopLinks, listShop } = props;
  return (
    <>
      {ShopLinks.links.map((item, index) => {
        return (
          <ul className={styles.headerShopUL}>
            <li className={listShop}>
              <span
                onClick={() => menuMenuClick(index)}
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
                      <>
                        <li className={styles.listShopItem}>{menuitem.name}</li>
                      </>
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
