import { useState } from "react";
import { ReactComponent as BurgerSVG } from "../assets/burger-menu.svg";
import { ReactComponent as DarkSVG } from "../assets/dark-theme.svg";
import { ReactComponent as LightSVG } from "../assets/light-theme.svg";

import styles from "../stylesheets/Navbar.module.css";
import Page from "../types/Page";
import Theme from "../types/Theme";
interface HeaderProps {
  pages: Page[];
  handlePageChange(page: Page): void;
  switchTheme(): void;
  currentPage: Page;
  currentTheme: Theme;
}

const Navbar = (props: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <nav className={styles["item-container"]}>
        {props.pages.map((value, index) => {
          return (
            <div
              className={styles.item}
              onClick={() => props.handlePageChange(value)}
              key={value}
            >
              <span className={styles.number}>{`0${index + 1}.`}</span>
              <span className={styles.page}>{`<${value}>`}</span>
              {props.currentPage === value && (
                <div className={styles.underline}></div>
              )}
            </div>
          );
        })}
        <div
          onClick={() => props.switchTheme()}
          className={styles["theme-container"]}
        >
          {props.currentTheme === "DARK" && (
            <DarkSVG className={styles["theme-icon-dark"]} />
          )}
          {props.currentTheme === "LIGHT" && (
            <LightSVG className={styles["theme-icon-light"]} />
          )}
        </div>
      </nav>
      <div className={styles["burger-menu"]}>
        <div onClick={() => handleToggleMenu()}>
          <BurgerSVG className={styles["burger-icon"]} />
        </div>
      </div>
      <nav
        className={`${styles["nav-menu"]} ${
          openMenu ? styles["nav-open"] : ""
        }`}
      >
        {props.pages.map((value, index) => {
          return (
            <div
              className={styles.item}
              onClick={() => {
                props.handlePageChange(value);
                handleToggleMenu();
              }}
              key={value}
            >
              <span className={styles.number}>{`0${index + 1}.`}</span>
              <span className={styles.page}>{`<${value}>`}</span>
              {props.currentPage === value && (
                <div className={styles.underline}></div>
              )}
            </div>
          );
        })}
        <div
          onClick={() => props.switchTheme()}
          className={styles["theme-container"]}
        >
          {props.currentTheme === "DARK" && (
            <LightSVG className={styles["theme-icon-light"]} />
          )}
          {props.currentTheme === "LIGHT" && (
            <DarkSVG className={styles["theme-icon-dark"]} />
          )}
          Switch Theme
        </div>
      </nav>
    </>
  );
};

export default Navbar;
