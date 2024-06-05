import { useEffect, useState } from "react";
import commonStyles from "../../stylesheets/Common.module.css";
import revealStyles from "../../stylesheets/Animations.module.css";
import styles from "../../stylesheets/Skills.module.css";
import Icon, { IconNames, icons } from "../Icon";
const Skills = () => {
  const [shown, setShown] = useState<boolean>(false);

  useEffect(() => {
    setShown(true);
  }, []);

  return (
    <div
      className={`${commonStyles.container}
      ${revealStyles["reveal-animation"]} 
      ${shown ? revealStyles.reveal : ""}`}
    >
      <div>
        <h1 className={commonStyles.heading}>
          <span className={commonStyles.number}>05.</span>
          <span>{`<my-skills>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
          Over the years I have learned a lot about software development and web development in
          general. I've been able to apply my knowledge to build and maintain products for a lot of
          clients and companies, and here are some of the tools that I have used.
        </p>
        <div className={styles.iconsContainer}>
          {(Object.keys(icons) as IconNames[]).map((icon) => (
            <>
              <Icon name={icon} size="large" key={icon} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
