import commonStyles from "../../stylesheets/Common.module.css";
import Card from "../Portfolio-Card/Card";

const Portfolio = () => {
  return (
    <div className={commonStyles.container}>
      <div>
        <h1 className={commonStyles.heading}>
          <span className={commonStyles.number}>03.</span>
          <span>{`<portfolio>`}</span>
        </h1>
        <p className={commonStyles["paragraph"]}>
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
