import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import envelope from "../images/envelope.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-div">
        <div className="horizontal">
          <div className="vertical">
            <img className="envelope" src={envelope} alt="Envelope" />
            <a className="mail-me" href="mailto:kiiramati@gmail.com">
              <div>
                <FontAwesomeIcon className="mail-me-icon" icon={faEnvelope} />
              </div>
              <div className="mail-me-text">
                Mail me at 
                <br/> 
                <span>kiiramati@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="vertical">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;