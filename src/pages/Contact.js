import envelope from "../images/envelope.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-div">
        <div className="horizontal">
          <div className="vertical"> 
            <div className="envelope-div">
              <img className="envelope" src={envelope} alt="Envelope" />
            </div>
          </div>
          <div className="vertical">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;