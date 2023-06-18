import { ReactComponent as GithubSVG } from "../../assets/brand-github.svg";
import chatterImg from "../../assets/chatter-cover.png";
import { ReactComponent as ExternalSVG } from "../../assets/external-link.svg";
import styles from "../../stylesheets/Card.module.css";
interface CardProps {
  src: string;
  techStack: string[];
  description: string;
  title: string;
}

const Card = () => {
  return (
    <div className={styles.container}>
      <img src={chatterImg} className={styles["cover-image"]} />
      <div className={styles.title}>Chatter</div>
      <div className={styles.description}>
        {" "}
        Watch and chat videos with your friends!
      </div>
      <div className={styles["link-container"]}>
        <ExternalSVG className={styles.icon} />
        <GithubSVG className={styles.icon} />
      </div>
      <div className={styles["techstack-container"]}>
        <div className={styles.pill}>React</div>
        <div className={styles.pill}>TypeScript</div>
        <div className={styles.pill}>GraphQL</div>
      </div>
    </div>
  );
};

export default Card;
