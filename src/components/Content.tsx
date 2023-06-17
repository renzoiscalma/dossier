import { useCallback } from "react";
import Page from "../types/Page";
import style from "./../stylesheets/Content.module.css";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";

interface ContentProps {
  currentPage: Page;
}
const Content = (props: ContentProps) => {
  // memoize this function instead of using a function per change of props
  const renderContent = useCallback(() => {
    switch (props.currentPage) {
      case "about":
        return <About />;
      case "career":
        return <Career />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      case "skills":
        return <Skills />;
      default:
        return <About />;
    }
  }, [props.currentPage]);

  return <div className={style.container}>{renderContent()}</div>;
};

export default Content;
