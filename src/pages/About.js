import TurtlePortrait from "../components/TurtlePortrait";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="horizontal about-div">
        <p className="about-me-text">
          I'm an ex-health care provider that lives with a Software Developer.<br /><br />
          Since I used to be interested in maths, my other half's job got my attention.<br /><br />
          With a mentor at home and by following some tutorials, I have done <a href="">projects</a> in JavaScript, HTML, CSS and React.
        </p>
        <TurtlePortrait />
      </div>
    </div>
  );
}

export default About;