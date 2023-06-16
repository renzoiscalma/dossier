import Page from "../types/Page";
import Content from "./Content";
import Navbar from "./Navbar";

interface LayoutProps {
  pages: Page[];
  currentPage: Page;
  handlePageChange(page: Page): void;
  switchTheme(): void;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar {...props} />
      <Content currentPage={props.currentPage} />
    </>
  );
};

export default Layout;
