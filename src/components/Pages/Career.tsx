import { useEffect, useRef, useState } from "react";
import revealStyles from "../../stylesheets/Animations.module.css";
import styles from "../../stylesheets/Career.module.css";
import commonStyles from "../../stylesheets/Common.module.css";
import { careers } from "../../careersdata";
import { ReactComponent as SVGIcon } from "../../assets/CV.svg";
import { ControlledMenu, MenuItem, useHover, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export type Experience = {
  company: string;
  position: string;
  date: string;
  descriptions: string[];
};

const renderCareer = (career: Experience) => {
  const { company, position, date } = career;
  const textStyle = `${commonStyles["sub-heading"]} ${styles["inline"]} ${styles.header}`;
  return (
    <div>
      <div className={`${styles.careerHeader}`}>
        <h2 className={textStyle}>
          {company} · <span className={`${styles.position}`}>{position}</span>
        </h2>
        <h2 className={`${textStyle} ${styles.date}`}>{date}</h2>
      </div>
    </div>
  );
};

const renderCareerDescriptions = (descriptions: string[]) => {
  return (
    <div>
      <ul className={styles.descriptionList}>
        {descriptions.map((desc, i) => (
          <li key={i} className={styles.careerDescription}>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Career = () => {
  const [shown, setShown] = useState<boolean>(false);
  const [menuState, toggle] = useMenuState({ transition: true });
  const menuBtnRef = useRef<SVGSVGElement>(null);
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
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
        <h1 className={`${commonStyles.heading} ${styles.pageHeaderContainer}`}>
          <span className={commonStyles.number}>04.</span>
          <span>{`<my-working-career>`}</span>
          <div className={styles.links}>
            <div className={styles.csvIconContainer}>
              <SVGIcon className={styles.csvIcon} ref={menuBtnRef} {...anchorProps} />
              <ControlledMenu
                {...hoverProps}
                {...menuState}
                arrow
                direction="bottom"
                align="center"
                menuClassName={styles.menu}
                anchorRef={menuBtnRef}
                onClose={() => toggle(false)}
              >
                <MenuItem className={styles.menuItem}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://drive.google.com/file/d/1yIDw-gy9zu-xKlxENujfUIED1u0EluBn/view?usp=drive_link"
                    }
                  >
                    Download Web Developer CV
                  </a>
                </MenuItem>
                <MenuItem className={styles.menuItem}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://drive.google.com/file/d/199a0JJc7lEK5K96mjd1A7Uos9WI3jpnu/view?usp=drive_link"
                    }
                  >
                    Download Game Developer CV
                  </a>
                </MenuItem>
              </ControlledMenu>
            </div>
          </div>
        </h1>
        <p className={commonStyles["paragraph"]}>
          I have built and maintained products for numerous companies over the years. Garnering
          extensive knowledge in software development and web development in general. I'll always
          take pride in contributing a lot to make a lot of things better.
        </p>
      </div>
      <div className={styles.careersContainer}>
        {careers.map((career) => (
          <div key={career.company}>
            {renderCareer(career)} {renderCareerDescriptions(career.descriptions)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
