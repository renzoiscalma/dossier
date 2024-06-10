import { useEffect, useState } from "react";
import revealStyles from "../../stylesheets/Animations.module.css";
import commonStyles from "../../stylesheets/Common.module.css";

const About = () => {
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
          <span className={commonStyles.number}>02.</span>
          <span>{`<a-little-about-me>`}</span>
        </h1>
        <h2 className={commonStyles["sub-heading"]}>Web Developer 🌐</h2>
        <p className={commonStyles["paragraph"]}>
          Currently, I am a Web Developer freelancer, wanting to help other people who would need my
          expertise in order to make their products come to life. I love building projects and I
          enjoy the nitty gritty aspect of creating optimized and efficient code.
        </p>
        <h2 className={commonStyles["sub-heading"]}>Game Developer 🎮</h2>
        <p className={commonStyles["paragraph"]}>
          On the side, since I love playing games, I've also dabbled in some Game Development. I've
          worked on personal projects that involve making games with libraries in C++, Unity, and
          Godot. Check those out in my portfolio.
        </p>
      </div>
      <div>
        <h2 className={commonStyles["sub-heading"]}>
          Finishing things fast 💨 & Planning things ✍️
        </h2>
        <p className={commonStyles["paragraph"]}>
          I always strive to deliver projects as fast as possible. We know the consequence of
          finishing projects quickly is the accuracy of the project. In order to mitigate mistakes
          that is possible to make is to have a very great plan on how we'll be able to tackle the
          project. Fortunately, I love planning things. Planning is one of the favorite things that
          I do when I work on projects. I take my time to plan and organize things. This makes life
          easier for both my clients and myself because we are able to harmonize the goals that we
          intend to finish on specific dates. Basically keep up with the set deadlines that we
          intend to finish.
        </p>
      </div>
      <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
        <span>{`</a-little-about-me>`}</span>
      </h1>
    </div>
  );
};

export default About;
