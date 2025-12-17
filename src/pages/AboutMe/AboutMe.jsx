import Heading from "../../components/Heading/Heading";
import "./AboutMe.css";
import codeIcon from "/src/assets/icons/code.svg"
import codeBracesIcon from "/src/assets/icons/code-braces.svg"
const AboutMe = () => {
  return (
    <div className="about-main">
      <div className="about-main-child">
        <Heading heading={"About Me"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit
          turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel
          consequat mauris. Quisque sodales ipsum aliquet aliquam placerat.
          Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut
          facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu
          nibh, bibendum in enim sed, ullamcorper feugiat nunc.
        </p>
      </div>
      <div className="about-main-child">
        <div className="about-card">
          <div>
            <h3>Backend Developer</h3>
            <a href="">Projects</a>
          </div>
          <img src={codeIcon} className="about-icon" alt="" />
        </div>
        <div className="about-card">
          <div>
            <h3>Freelancer</h3>
            <a href="">Hire me!</a>
          </div>
          <img src={codeBracesIcon} className="about-icon" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
