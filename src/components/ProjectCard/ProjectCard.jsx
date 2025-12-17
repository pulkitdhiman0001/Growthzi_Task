import "./ProjectCard.css";
import projectIcon from "/src/assets/images/stanley-dai-73OZYNjVoNI-unsplash 1.png"
import redirectIcon from "/src/assets/icons/redirect.svg"
const ProjectCard = ({name}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          className="main-img"
          src={projectIcon}
          alt=""
        />
        <img
          src={redirectIcon}
          className="redirect-icon"
          alt=""
        />
      </div>

      <div className="project-title">{name}</div>
    </div>
  );
};

export default ProjectCard;
