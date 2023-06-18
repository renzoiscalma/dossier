import { ReactComponent as GithubSVG } from "../../assets/brand-github.svg";
import { ReactComponent as ExternalSVG } from "../../assets/external-link.svg";
import styles from "../../stylesheets/Card.module.css";
import Project from "../../types/Project";

const Card = (props: Project) => {
  const { description, src, techStack, title, githubURL, projectURL } = props;
  return (
    <div className={styles.container}>
      <img
        src={src}
        className={styles["cover-image"]}
        alt={title + "-project"}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles["link-container"]}>
        <a href={projectURL} target="_blank" rel="noopener noreferrer">
          <ExternalSVG className={styles.icon} />
        </a>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <GithubSVG className={styles.icon} />
        </a>
      </div>
      <div className={styles["techstack-container"]}>
        {techStack.map((value, index) => (
          <div className={styles.pill} key={index}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
