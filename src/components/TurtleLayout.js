import "../components/TurtleLayout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function TurtleLayout({ title, text, githubHref, linkHref }) {
  const shouldHideButton = () => {
    return typeof(linkHref) !== "string";
  };

  return (
    <div className="turtle-layout">
      <div className="turtle-layout-top">
        <div className="turtle-part left-flipper"></div>
        <div className="turtle-part turtle-head"></div>
        <div className="turtle-part right-flipper"></div>
      </div>
      <div className="turtle-layout-mid">
        <div className="turtle-part body">
          <h2 className="body-title">{title}</h2>
          <p className="body-text">{text}</p>
        </div>
      </div>
      <div className="turtle-layout-bot">
        <div className="turtle-part left-leg">
          <a href={githubHref}><FontAwesomeIcon className="github-turtle-leg" icon={faGithub} /></a>
        </div>
        <div className="turtle-part right-leg">
          <a href={linkHref}><FontAwesomeIcon className={`link-turtle-leg ${shouldHideButton() ? "hidden" : ""}`} icon={faLink} /></a>
        </div>
      </div>
    </div>

  );
}

export default TurtleLayout;