import commonStyles from "../../stylesheets/Common.module.css";
import styles from "../../stylesheets/Portfolio.module.css";
import Project from "../../types/Project";
import Card from "../Portfolio-Card/Card";

import chatterImg from "../../assets/chatter-cover.png";

const portfolioList: Project[] = [
  {
    src: chatterImg,
    techStack: ["React", "TypeScript", "GraphQL"],
    description: "Watch videos and chat with your friends!",
    title: "Chatter",
    githubURL: "https://github.com/renzoiscalma/chatter-web",
    projectURL: "https://renzoiscalma.github.io/chatter-web-fe/",
  },
  {
    src: chatterImg,
    techStack: ["React", "TypeScript", "GraphQL"],
    description: "Watch videos and chat with your friends!",
    title: "Dossier",
    githubURL: "https://github.com/renzoiscalma/chatter-web",
    projectURL: "https://renzoiscalma.github.io/chatter-web-fe/",
  },
  {
    src: chatterImg,
    techStack: ["React", "TypeScript", "GraphQL"],
    description: "Watch videos and chat with your friends!",
    title: "Main-Page",
    githubURL: "https://github.com/renzoiscalma/chatter-web",
    projectURL: "https://renzoiscalma.github.io/chatter-web-fe/",
  },
];

const Portfolio = () => {
  return (
    <div className={commonStyles.container}>
      <div>
        <h1 className={commonStyles.heading}>
          <span className={commonStyles.number}>03.</span>
          <span>{`<portfolio>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
