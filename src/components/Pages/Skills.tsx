import { useEffect, useState } from "react";
import commonStyles from "../../stylesheets/Common.module.css";
import revealStyles from "../../stylesheets/Animations.module.css";
import styles from "../../stylesheets/Skills.module.css";
import Icon, { IconNames } from "../Icon";

const frontEndTech: IconNames[] = [
  "HTML",
  "CSS",
  "Tailwind",
  "Angular",
  "React",
  "Vue",
  "NextJS",
  "d3",
];

const backEndTech: IconNames[] = [
  "GraphQL",
  "Spring",
  "Express",
  "Django",
  "MySQL",
  "MongoDB",
  "Redis",
];

const gameDevTech: IconNames[] = ["Godot", "Unity", "PyGame", "Blit3D", "OpenGL"];

const programmingLanguages: IconNames[] = [
  "Java",
  "Javascript",
  "CPP",
  "CSharp",
  "Typescript",
  "Python",
  "Lua",
];

const Technologies = (props: { iconNames: IconNames[]; title: string }) => {
  const { iconNames, title } = props;
  return (
    <div className={styles.techsContainer}>
      <div className={styles.techContainer}>
        <h2>{title}</h2>
        <div className={styles.iconsContainer}>
          {iconNames.map((icon) => (
            <>
              <Icon name={icon} size="large" key={icon} label="bottom" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

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
          clients and companies, and here are some of the skills that I have used.
        </p>
        <div className={styles.techsContainer}>
          <Technologies iconNames={frontEndTech} title="Frontend Technologies" />
          <Technologies iconNames={backEndTech} title="Backend Technologies" />
          <Technologies iconNames={gameDevTech} title="Game Development" />
          <Technologies iconNames={programmingLanguages} title="Programming Languages" />
        </div>
        <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
          <span>{`</my-skills>`}</span>
        </h1>
      </div>
    </div>
  );
};

export default Skills;
