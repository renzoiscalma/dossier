import styles from "../stylesheets/PageLinks.module.css";
import Page from "../types/Page";
interface HeaderProps {
  pages: Page[];
  handlePageChange(page: Page): void;
  switchTheme(): void;
  currentPage: Page;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      {props.pages.map((value, index) => {
        return (
          <span
            className={props.currentPage === value ? styles.active : ""}
            onClick={() => props.handlePageChange(value)}
            key={value}
          >
            {`0${index + 1}. < ${value} >`}
          </span>
        );
      })}
      <span onClick={() => props.switchTheme()}> change theme </span>
    </>
  );
};

export default Header;
