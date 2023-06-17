import styles from "../stylesheets/PageLinks.module.css";
import Page from "../types/Page";
interface HeaderProps {
  pages: Page[];
  handlePageChange(page: Page): void;
  switchTheme(): void;
  currentPage: Page;
}

const Navbar = (props: HeaderProps) => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
