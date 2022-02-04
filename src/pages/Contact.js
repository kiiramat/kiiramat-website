import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";
import Envelope from "../components/Envelope";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import "./Contact.css";

class Contact extends react.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  onInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form Submitted!!!")
  }

  render() {
    return (
      <div className="contact-container">
        <div className="contact-div">
          <div className="horizontal">
            <div className="vertical envelope-mail_me-div">
              <Envelope />
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
              <form onSubmit={this.handleSubmit}>
                <p className="message-me">Send me a message</p>
                <div className="input-container">
                  <InputField
                    name="name"
                    value={this.state.name}
                    placeholder="Name"
                    onInputChange={this.onInputChange}
                  />
                  <InputField
                    name="email"
                    value={this.state.email}
                    placeholder="Email Address"
                    onInputChange={this.onInputChange}
                  />
                  <InputField
                    name="subject"
                    value={this.state.subject}
                    placeholder="Subject"
                    onInputChange={this.onInputChange}
                  />
                  <p className="message-text-before-textarea">Message:</p>
                  <TextArea
                    name="message"
                    value={this.state.message}
                    onInputChange={this.onInputChange}
                  />
                  <button className="submit-button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;