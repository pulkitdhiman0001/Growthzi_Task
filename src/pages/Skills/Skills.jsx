import Heading from "../../components/Heading/Heading";
import "./Skills.css";
import javascriptIcon from "/src/assets/icons/javascript-original 1.svg"
import typescriptIcon from "/src/assets/icons/typescript-original 2.svg"
import html5Icon from "/src/assets/icons/html5-original 1.svg"
import css3Icon from "/src/assets/icons/css3-original 1.svg"
import reactIcon from "/src/assets/icons/react-original 1.svg"
import reduxIcon from "/src/assets/icons/redux-original 1.svg"
import nodejsIcon from "/src/assets/icons/nodejs-original 1.svg"
import nextjsIcon from "/src/assets/icons/nextjs-original 1.svg"
import linuxIcon from "/src/assets/icons/linux-original 1.svg"
import pythonIcon from "/src/assets/icons/python-original 1.svg"
import rubyIcon from "/src/assets/icons/ruby-original-wordmark 1.svg"
import railsIcon from "/src/assets/icons/rails-plain-wordmark 1.svg"
const Skills = () => {
  return (
    <div className="skills-main">
      <div className="skills-inner">
        <Heading heading={"Skills"} />
        <div className="icon-container">
          <img src={javascriptIcon} className="skill-icon" alt="" />
          <img src={typescriptIcon} className="skill-icon" alt="" />
          <img src={html5Icon} className="skill-icon" alt="" />
          <img src={css3Icon} className="skill-icon" alt="" />
          <img src={reactIcon} className="skill-icon" alt="" />
          <img src={reduxIcon} className="skill-icon" alt="" />
          <img src={nodejsIcon} className="skill-icon" alt="" />
          <img src={nextjsIcon} className="skill-icon" alt="" />
          <img src={linuxIcon} className="skill-icon" alt="" />
          <img src={pythonIcon} className="skill-icon" alt="" />
          <img src={rubyIcon} className="skill-icon" alt="" />
          <img src={railsIcon} className="skill-icon" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
