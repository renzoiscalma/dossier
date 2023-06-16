import Page from "../types/Page";
import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
  pages: Page[];
  currentPage: Page;
  handlePageChange(page: Page): void;
  switchTheme(): void;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header {...props} />
      <Content currentPage={props.currentPage} />
    </>
  );
};

export default Layout;
