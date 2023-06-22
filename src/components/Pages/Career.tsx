import { useEffect, useState } from "react";
import revealStyles from "../../stylesheets/Animations.module.css";
import styles from "../../stylesheets/Career.module.css";
import commonStyles from "../../stylesheets/Common.module.css";

const Career = () => {
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
          <span className={commonStyles.number}>04.</span>
          <span>{`<my-working-career>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
          I have built and maintained products for numerous companies over the
          years. Garnering extensive knowledge in software development and web
          development in general. I'll always take pride in contributing a lot
          to make a lot of things better.
        </p>
      </div>
      <div>
        <h2 className={`${commonStyles["sub-heading"]} ${styles["inline"]}`}>
          Software Engineer @
        </h2>
        <span className={styles.career}>
          Samsung Research and Development Philippines
        </span>
      </div>
      <div>
        <h2 className={`${commonStyles["sub-heading"]} ${styles["inline"]}`}>
          Full-Stack Software Engineer @
        </h2>
        <span className={styles.career}>Balsam Brands</span>
      </div>
      <div>
        <h2 className={`${commonStyles["sub-heading"]} ${styles["inline"]}`}>
          Software Engineer @
        </h2>
        <span className={styles.career}> PCCW Solutions Philippines</span>
      </div>
      <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
        <span>{`</my-working-career>`}</span>
      </h1>
    </div>
  );
};

export default Career;
