import turtle from "../images/turtle300.png"
import "./About.css"

function About() {
    return (
        <div className="about-div">
            <img className="turtle" src={turtle} alt="Turtle" />
        </div>
    );
}

export default About;