import Page from "../interfaces/Page";

interface HeaderProps {
  pages: Page[];
  handlePageChange(page: Page): void;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      {props.pages.map((value, index) => {
        return (
          <span onClick={() => props.handlePageChange(value)}>{`0${
            index + 1
          }. < ${value} >`}</span>
        );
      })}
    </>
  );
};

export default Header;
