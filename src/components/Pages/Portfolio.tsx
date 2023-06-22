import revealStyles from "../../stylesheets/Animations.module.css";
import commonStyles from "../../stylesheets/Common.module.css";
import styles from "../../stylesheets/Portfolio.module.css";
import Project from "../../types/Project";
import Card from "../Portfolio-Card/Card";

import { useEffect, useState } from "react";
import chatterImg from "../../assets/chatter-cover.png";
import dossierImg from "../../assets/dossier-cover.png";
import mainPageImg from "../../assets/main-page.png";

const portfolioList: Project[] = [
  {
    src: chatterImg,
    techStack: ["React", "TypeScript", "GraphQL", "Redis"],
    description: "Watch videos and chat with your friends!",
    title: "Chatter",
    githubURL: "https://github.com/renzoiscalma/chatter-web",
    projectURL: "https://renzoiscalma.github.io/chatter-web-fe/",
  },
  {
    src: dossierImg,
    techStack: ["React", "TypeScript", "CSS"],
    description: "Watch videos and chat with your friends!",
    title: "Dossier",
    githubURL: "https://github.com/renzoiscalma/dossier",
    projectURL: "https://renzoiscalma.github.io/dossier/",
  },
  {
    src: mainPageImg,
    techStack: ["React", "TypeScript", "Material-ui"],
    description: "A simple hero page",
    title: "Main-Page",
    githubURL: "https://github.com/renzoiscalma/main-page",
    projectURL: "https://renzoiscalma.github.io/main-page/",
  },
];

const Portfolio = () => {
  const [shown, setShown] = useState<boolean>(false);

  useEffect(() => {
    setShown(true);
  }, []);

  return (
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
      <div className={styles["project-container"]}>
        {portfolioList.map((portfolio) => (
          <Card {...portfolio} key={portfolio.title} />
        ))}
      </div>
      <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
        <span>{`</portfolio>`}</span>
      </h1>
    </div>
  );
};

export default Portfolio;
