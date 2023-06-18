import styles from "../../stylesheets/Career.module.css";
import commonStyles from "../../stylesheets/Common.module.css";
const Career = () => {
  return (
    <div className={commonStyles.container}>
      <div>
        <h1 className={commonStyles.heading}>
          <span className={commonStyles.number}>04.</span>
          <span>{`<my-working-career>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <h2 className={`${commonStyles["sub-heading"]} ${styles["inline"]}`}>
          Software Engineer
        </h2>
        <span className={styles.career}>
          @ Samsung Research and Development Philippines
        </span>
      </div>
      <div>
        <h2 className={`${commonStyles["sub-heading"]} ${styles["inline"]}`}>
          Full-Stack Software Engineer
        </h2>
        <span className={styles.career}>@ Balsam Brands</span>
      </div>
      <div>
        <h2 className={`${commonStyles["sub-heading"]} ${styles["inline"]}`}>
          Software Engineer
        </h2>
        <span className={styles.career}>@ PCCW Solutions Philippines</span>
      </div>
      <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
        <span>{`</my-working-career>`}</span>
      </h1>
    </div>
  );
};

export default Career;
