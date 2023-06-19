import { useState } from "react";
import { ReactComponent as BurgerSVG } from "../assets/burger-menu.svg";
import styles from "../stylesheets/Navbar.module.css";
import Page from "../types/Page";
interface HeaderProps {
  pages: Page[];
  handlePageChange(page: Page): void;
  switchTheme(): void;
  currentPage: Page;
}

const Navbar = (props: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className={styles["item-container"]}>
        {props.pages.map((value, index) => {
          return (
            <span
              className={styles.item}
              onClick={() => props.handlePageChange(value)}
              key={value}
            >
              <span className={styles.number}>{`0${index + 1}.`}</span>
              <span className={styles.page}>{`<${value}>`}</span>
              {props.currentPage === value && (
                <div className={styles.underline}></div>
              )}
            </span>
          );
        })}
        <span onClick={() => props.switchTheme()}> change theme </span>
      </div>
      <div className={styles["burger-menu"]}>
        <div onClick={() => handleToggleMenu()}>
          <BurgerSVG className={styles["burger-icon"]} />
        </div>
      </div>
      <div
        className={`${styles["nav-menu"]} ${
          openMenu ? styles["nav-open"] : ""
        }`}
      >
        {props.pages.map((value, index) => {
          return (
            <span
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
            </span>
          );
        })}
        <span onClick={() => props.switchTheme()}> change theme </span>
      </div>
    </>
  );
};

export default Navbar;
