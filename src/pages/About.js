import turtle from "../images/turtle300.png";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="vertical about-div">
        <img className="turtle-portrait" src={turtle} alt="Turtle" />
        <p className="about-me-text">
          I'm an ex-health care provider that lives with a Software Developer.<br /><br />
          Since I used to be interested in maths, my other half's job got my attention.<br /><br />
          With a mentor at home and by following some tutorials, I have done projects in JavaScript, HTML, CSS and React.
        </p>
      </div>
    </div>
  );
}

export default About;