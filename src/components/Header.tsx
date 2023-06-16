import Page from "../types/Page";

interface HeaderProps {
  pages: Page[];
  handlePageChange(page: Page): void;
  switchTheme(): void;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      {props.pages.map((value, index) => {
        return (
          <span onClick={() => props.handlePageChange(value)} key={value}>{`0${
            index + 1
          }. < ${value} >`}</span>
        );
      })}
      <span onClick={() => props.switchTheme()}> change theme </span>
    </>
  );
};

export default Header;
