import { ReactComponent as GithubSVG } from "../../assets/brand-github.svg";
import { ReactComponent as ExternalSVG } from "../../assets/external-link.svg";
import styles from "../../stylesheets/Card.module.css";
import Project from "../../types/Project";
import Thumbnails from "./Thumbnails";

type CardProps = Project & {
  index: number;
  handleCardClick: (index: number) => void;
};

const Card = (props: CardProps) => {
  const {
    video,
    image,
    description,
    thumbnail,
    techStack,
    title,
    githubURL,
    projectURL,
    handleCardClick,
  } = props;

  return (
    <div className={styles.container} onClick={() => handleCardClick(props.index)}>
      <Thumbnails src={thumbnail} image={image} video={video} projectName={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles["link-container"]}>
        {projectURL && (
          <a
            href={projectURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalSVG className={styles.icon} />
          </a>
        )}
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
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
