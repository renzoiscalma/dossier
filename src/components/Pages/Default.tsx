import { ReactComponent as GitHubSVG } from "../../assets/brand-github.svg";
import { ReactComponent as EmailSVG } from "../../assets/email-message-inbox.svg";
import { ReactComponent as LinkedInSVG } from "../../assets/linked-in.svg";
import ImgPortrait from "../../assets/pc-img3.jpg";
import styles from "../../stylesheets/Default.module.css";

const Default = () => {
  return (
    <div className={styles.container}>
      <div className={styles["sidebar-left"]}>
        <a
          href="https://github.com/renzoiscalma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubSVG className={styles.icon} />
        </a>
        <a href="mailto:jlpcalma@gmail.com">
          <EmailSVG className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/renzo-calma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInSVG className={styles.icon} />
        </a>
        <div className={styles.vLine} />
      </div>
      <div className={styles["heading"]}>
        <h1>Hi, I'm Renzo</h1>
        <h1 className={styles["heading-webdev"]}>Web Developer </h1>
      </div>
      <figure className={styles["self-image-container"]}>
        <img
          src={ImgPortrait}
          className={styles.image}
          alt="self-portrait-developer"
        />
        <div className={styles["img-custom-border-container"]}>
          <div className={styles["img-custom-border-top"]} />
          <div className={styles["img-custom-border-right"]} />
        </div>
      </figure>
      <div className={styles["description"]}>
        <p>
          I'm a developer based in Canada. I make stuff happen since 2018.
          Currently I focus on making people's experience on the web better.
        </p>
        <div className={styles["desc-links"]}>
          <div className={styles.hLine} />
          <a
            href="https://github.com/renzoiscalma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubSVG className={styles.icon} />
          </a>
          <a href="mailto:jlpcalma@gmail.com">
            <EmailSVG className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/renzo-calma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInSVG className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles["sidebar-right"]}>
        <div className={styles["sideway-text"]}>jlpcalma@gmail.com</div>
        <div className={styles.vLine} />
      </div>
    </div>
  );
};

export default Default;
