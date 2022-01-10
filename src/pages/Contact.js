import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";
import InputField from "../components/InputField";
import envelope from "../images/envelope.png";
import "./Contact.css";

class Contact extends react.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: ""
    };
  }

  onInputChange = (name, value) => {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="contact-container">
        <div className="contact-div">
          <div className="horizontal">
            <div className="vertical envelope-mail_me-div">
              <img className="envelope" src={envelope} alt="Envelope" />
              <a className="mail-me" href="mailto:kiiramati@gmail.com">
                <div>
                  <FontAwesomeIcon className="mail-me-icon" icon={faEnvelope} />
                </div>
                <div className="mail-me-text">
                  Mail me at
                  <br />
                  <span>kiiramati@gmail.com</span>
                </div>
              </a>
            </div>
            <div className="vertical message_me-div">
              <p className="message-me">Send me a message</p>
              <div className="input-container">
                <InputField 
                name="name" 
                value= {this.state.name}
                placeholder="Name"
                onInputChange={this.onInputChange} 
              />
              <InputField 
                name="email" 
                value= {this.state.email}
                placeholder="Email Address"
                onInputChange={this.onInputChange}
              />
              <InputField 
                name="subject" 
                value= {this.state.subject}
                placeholder="Subject"
                onInputChange={this.onInputChange}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;