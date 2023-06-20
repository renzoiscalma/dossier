import { useMemo } from "react";
import Page from "../types/Page";
import style from "./../stylesheets/Content.module.css";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Default from "./Pages/Default";
import Portfolio from "./Pages/Portfolio";

interface ContentProps {
  currentPage: Page;
}
const Content = (props: ContentProps) => {
  // memoize this function instead of using a function per change of props
  const renderContent = useMemo(() => {
    switch (props.currentPage) {
      case "index":
        return <Default />;
      case "career":
        return <Career />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <About />;
      default:
        return <Default />;
    }
  }, [props.currentPage]);

  return <div className={style.container}>{renderContent}</div>;
};

export default Content;
