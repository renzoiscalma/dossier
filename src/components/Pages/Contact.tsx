import { useEffect, useState } from "react";
import revealStyles from "../../stylesheets/Animations.module.css";
import buttonStyles from "../../stylesheets/Button.module.css";
import commonStyles from "../../stylesheets/Common.module.css";

const Contact = () => {
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
          <span>{`<get-in-touch>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
          My inbox is always open. Whether you have a question or project or
          just wanted to say hi, I'll try my best to get back to you!
        </p>
      </div>
      <div>
        <div>
          <button className={buttonStyles["contact-me"]}>Say Hello!</button>
        </div>
      </div>
      <h1 className={`${commonStyles.heading} ${commonStyles["end-heading"]}`}>
        <span>{`</get-in-touch>`}</span>
      </h1>
    </div>
  );
};

export default Contact;
