import style from "../stylesheets/Layout.module.css";
import Page from "../types/Page";
import Theme from "../types/Theme";
import Content from "./Content";
import Navbar from "./Navbar";
interface LayoutProps {
  pages: Page[];
  currentPage: Page;
  handlePageChange(page: Page): void;
  switchTheme(): void;
  currentTheme: Theme;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={style.container}>
      <Navbar {...props} />
      <Content currentPage={props.currentPage} />
    </div>
  );
};

export default Layout;
