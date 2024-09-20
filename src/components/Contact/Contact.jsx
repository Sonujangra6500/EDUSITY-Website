import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0242999a-cff1-49f1-87b8-8a10dfaae41e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("success", data);
      setResult("Email sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          feel free to out through contact form or find our contact information
          to below. Your feedback , question , and suggestions are important to
          us as we strive to provide exceptional service to our university
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail-icon" />
            contact@Sonujangra.dev
          </li>
          <li>
            <img src={phone_icon} alt="phone-icon" />
            +1 123-456-789
          </li>
          <li>
            <img src={location_icon} alt="location-icon" />
            77 Massachusetts Ave , Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="white-arrow" />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
