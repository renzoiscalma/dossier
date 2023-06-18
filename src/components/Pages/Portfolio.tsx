import styles from "../../stylesheets/Portfolio.module.css";
import Card from "../Portfolio-Card/Card";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>
          <span className={styles.number}>03.</span>
          <span>{`<portfolio>`}</span>
        </h1>
        <p className={styles["portfolio-paragraph"]}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Portfolio;
