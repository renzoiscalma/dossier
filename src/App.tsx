import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Layout from "./components/Layout";
import Page from "./types/Page";
import Theme from "./types/Theme";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const pages: Page[] = ["index", "about", "portfolio", "skills", "career", "contact"];
  const [currentPage, setCurrentPage] = useState<Page>("index");
  const [theme, setTheme] = useLocalStorage<Theme>("theme", defaultDark ? "DARK" : "DARK");

  const handlePageChange = (page: Page): void => {
    setCurrentPage(page);
  };

  const switchTheme = () => {
    const newTheme: Theme = theme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
    console.log(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Layout
        pages={pages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        switchTheme={switchTheme}
        currentTheme={theme}
      />
    </div>
  );
}

export default App;
