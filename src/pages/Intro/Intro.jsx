import "./Intro.css";
import avatarIcon from "/src/assets/images/avatar.png"
import TSIcon from "/src/assets/icons/ts.svg"
import nodeIcon from "/src/assets/icons/node.svg"
import reaactIcon from "/src/assets/icons/react.svg"
const Intro = () => {
  return (
    <div className="intro-main">
      <div className="intro-main-left">
        <div className="greet">Hello, i am</div>
        <div className="name-block">
          <div>&lt; John</div>
          <div>Doe /&gt;</div>
        </div>
        <div className="role">Backend Developer</div>

        <div className="experience-main">
          <div className="experience">
            <div className="experience-years">5</div>
            <div className="">years of experience</div>
          </div>
          <div className="projects">
            <div className="total-projects">13</div>
            <div className="">Projects Completed around the world</div>
          </div>
        </div>
      </div>
      <div>
        <div className="avatar-frame">
            <img src={avatarIcon} alt="" />
            <div className="ts-icon icon-wrapper">
                <img src={TSIcon} alt="" />
            </div>
            <div className="node-icon icon-wrapper">
                <img src={nodeIcon} alt="" />
            </div>
            <div className="react-icon react-icon-wrapper">
                <img src={reaactIcon} alt="" />
            </div>

            <div className="particle-1">

            </div>
            <div className="particle-2">

            </div>
            <div className="particle-3">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
