import envelope from "../images/envelope.png"
import "./Contact.css"

function Contact() {
    return (
        <div className="contact-div">
            <img className="envelope" src={envelope} alt="Envelope" />
        </div>
    );
}

export default Contact;