import { useEffect, useState } from "react";
import revealStyles from "../../stylesheets/Animations.module.css";
import buttonStyles from "../../stylesheets/Button.module.css";
import commonStyles from "../../stylesheets/Common.module.css";
import styles from "../../stylesheets/Contact.module.css";
import InputGroup from "../Input/InputGroup";

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
          ${styles["container"]}
        `}
    >
      <div>
        <h1 className={commonStyles.heading}>
          <span className={commonStyles.number}>05.</span>
          <span>{`<get-in-touch>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
          My inbox is always open. Whether you have a question or project or
          just wanted to say hi, I'll get back to you as soon as possible!
        </p>
      </div>
      <form
        action="https://formspree.io/f/xzblpppv"
        method="POST"
        className={styles["contact-form"]}
        target="_blank"
      >
        <div className={styles["form-row"]}>
          <InputGroup
            formName="fullName"
            placeHolder="Enter Your Full Name"
            label="Full Name"
            type="text"
          ></InputGroup>
          <InputGroup
            formName="email"
            placeHolder="Enter Your E-mail"
            label="E-mail"
            type="email"
          ></InputGroup>
        </div>
        <div className={styles["form-row"]}>
          <InputGroup
            formName="yourMessage"
            placeHolder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            label="Your Message"
            type="textarea"
          ></InputGroup>
        </div>
        <div className={`${styles["form-row"]} ${styles["button-container"]}`}>
          <button className={buttonStyles["contact-me"]}>Say Hello!</button>
        </div>
      </form>
      <h1
        className={`${commonStyles.heading} ${commonStyles["end-heading"]} ${styles["end-heading"]}`}
      >
        <span>{`</get-in-touch>`}</span>
      </h1>
    </div>
  );
};

export default Contact;
