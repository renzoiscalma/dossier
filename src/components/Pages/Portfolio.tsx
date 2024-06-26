import revealStyles from "../../stylesheets/Animations.module.css";
import commonStyles from "../../stylesheets/Common.module.css";
import styles from "../../stylesheets/Portfolio.module.css";
import Card from "../Portfolio-Card/Card";

import { useEffect, useState } from "react";
import PortfolioModal from "../Portfolio-Modal";
import { portfolioData as portfolioList } from "../../portfoliodata";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1800: 3,
  1400: 2,
  876: 1,
};

const Portfolio = () => {
  const [shown, setShown] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    console.log("Card clicked, should open a modal");
  };

  useEffect(() => {
    setShown(true);
  }, []);

  return (
    <>
      <div
        className={`${commonStyles.container}
          ${revealStyles["reveal-animation"]} 
          ${shown ? revealStyles.reveal : ""}
        `}
      >
        <div>
          <h1 className={commonStyles.heading}>
            <span className={commonStyles.number}>03.</span>
            <span>{`<portfolio>`}</span>
          </h1>
          <p className={commonStyles["paragraph"]}>
            These are some of the projects that I have made.
          </p>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles["project-container"]}
          columnClassName={styles["column-project"]}
        >
          {portfolioList.map((portfolio, index) => (
            <Card
              {...portfolio}
              key={portfolio.title}
              handleCardClick={handleCardClick}
              index={index}
            />
          ))}
        </Masonry>
        <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
          <span>{`</portfolio>`}</span>
        </h1>
      </div>
      <PortfolioModal
        open={selectedIndex !== -1}
        handleClose={() => {
          setSelectedIndex(-1);
        }}
        project={selectedIndex !== -1 ? portfolioList[selectedIndex] : undefined}
      ></PortfolioModal>
    </>
  );
};

export default Portfolio;
