import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Page from "./interfaces/Page";

function App() {
  const pages: Page[] = ["about", "skills", "portfolio", "career", "contact"];
  const [currentPage, setCurrentPage] = useState<Page>("about");

  const handlePageChange = (page: Page): void => {
    // TODO: promises on page transition :D
    setCurrentPage(page);
  };

  return (
    <Layout
      pages={pages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
}

export default App;
