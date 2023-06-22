import { useRef, useState } from "react";
import styles from "../../stylesheets/InputGroup.module.css";

interface InputGroupProps {
  formName: string;
  placeHolder: string;
  label: string;
  type: "text" | "email" | "textarea";
}
const InputGroup = (props: InputGroupProps) => {
  const textInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const [focused, setFocused] = useState<boolean>(false);

  const focusTextField = () => {
    textInputRef.current?.focus();
  };

  const handleOnFocus = () => {
    setFocused(true);
  };

  const handleOnBlur = () => {
    setFocused(false);
  };

  return (
    <div className={styles["group-container"]}>
      <label
        htmlFor={props.formName}
        className={`${styles["label"]} ${focused ? styles["focused"] : ""}`}
        onClick={() => focusTextField()}
      >
        {" "}
        {props.label}{" "}
      </label>
      {props.type !== "textarea" && (
        <input
          type={props.type}
          ref={textInputRef}
          name={props.formName}
          className={styles.input}
          placeholder={props.placeHolder}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          required
        ></input>
      )}
      {props.type === "textarea" && (
        <textarea
          ref={textInputRef}
          name={props.formName}
          className={styles.input}
          placeholder={props.placeHolder}
          minLength={30}
          rows={2}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          required
        ></textarea>
      )}
    </div>
  );
};

export default InputGroup;
