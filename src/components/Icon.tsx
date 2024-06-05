import { ReactComponent as AngularSVG } from "../assets/Icons/Angular.svg";
import { ReactComponent as CPPSVG } from "../assets/Icons/CPP.svg";
import { ReactComponent as CSharpSVG } from "../assets/Icons/CSharp.svg";
import { ReactComponent as CSSSVG } from "../assets/Icons/CSS.svg";
import { ReactComponent as D3SVG } from "../assets/Icons/d3.svg";
import { ReactComponent as DjangoSVG } from "../assets/Icons/Django.svg";
import { ReactComponent as ExpressSVG } from "../assets/Icons/Express.svg";
import { ReactComponent as GodotSVG } from "../assets/Icons/Godot.svg";
import { ReactComponent as HTMLSVG } from "../assets/Icons/HTML.svg";
import { ReactComponent as JavaSVG } from "../assets/Icons/Java.svg";
import { ReactComponent as JavascriptSVG } from "../assets/Icons/Javascript.svg";
import { ReactComponent as LuaSVG } from "../assets/Icons/Lua.svg";
import { ReactComponent as MongoSVG } from "../assets/Icons/MongoDB.svg";
import { ReactComponent as MySQLSVG } from "../assets/Icons/MySQL.svg";
import { ReactComponent as NextJSSVG } from "../assets/Icons/NextJS.svg";
import { ReactComponent as PyGameSVG } from "../assets/Icons/PyGame.svg";
import { ReactComponent as PythonSVG } from "../assets/Icons/Python.svg";
import { ReactComponent as ReactSVG } from "../assets/Icons/React.svg";
import { ReactComponent as TypescriptSVG } from "../assets/Icons/Typescript.svg";
import { ReactComponent as UnitySVG } from "../assets/Icons/Unity.svg";
import { ReactComponent as VueSVG } from "../assets/Icons/Vue.svg";
import { ReactComponent as SpringSVG } from "../assets/Icons/Spring.svg";
import iconStyles from "../stylesheets/Icons.module.css";
export type IconNames =
  | "Angular"
  | "CPP"
  | "CSharp"
  | "CSS"
  | "d3"
  | "Django"
  | "Express"
  | "Godot"
  | "HTML"
  | "Java"
  | "Javascript"
  | "Lua"
  | "MongoDB"
  | "MySQL"
  | "NextJS"
  | "PyGame"
  | "Python"
  | "React"
  | "Typescript"
  | "Unity"
  | "Vue"
  | "Spring";

type IconProps = {
  name: IconNames;
  size: "small" | "medium" | "large";
};

export const icons: Record<IconNames, React.ReactElement> = {
  Angular: <AngularSVG />,
  CPP: <CPPSVG />,
  CSharp: <CSharpSVG />,
  CSS: <CSSSVG />,
  d3: <D3SVG />,
  Django: <DjangoSVG />,
  Express: <ExpressSVG />,
  Godot: <GodotSVG />,
  HTML: <HTMLSVG />,
  Java: <JavaSVG />,
  Javascript: <JavascriptSVG />,
  Lua: <LuaSVG />,
  MongoDB: <MongoSVG />,
  MySQL: <MySQLSVG />,
  NextJS: <NextJSSVG />,
  PyGame: <PyGameSVG />,
  Python: <PythonSVG />,
  React: <ReactSVG />,
  Typescript: <TypescriptSVG />,
  Unity: <UnitySVG />,
  Vue: <VueSVG />,
  Spring: <SpringSVG />,
};

const Icon = (props: IconProps) => {
  const sizesMap = {
    small: iconStyles.small,
    medium: iconStyles.medium,
    large: iconStyles.large,
  };

  return (
    <div
      className={`${iconStyles.iconContainer} ${iconStyles[props.name]} ${sizesMap[props.size]}`}
    >
      {icons[props.name]}
    </div>
  );
};

export default Icon;
