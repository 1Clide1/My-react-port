// import react and css
import React from "react";
import emailjs from "@emailjs/browser";
import "./contactMe.css";

function ContactMe() {
  //this is for the email js for the contact form since i did not want to make a whole backend server for one form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhh0bua",
        "template_du51dal",
        e.target,
        "fwA1FlNQ1EFZlHilc"
      )
      .then(
        (result) => {
          // placeholder alert for now but rather have something than nothing at the moment
          alert("thanks for the message :)");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-me-container" id="Contact Me">
      <div className="form-title-container">
        <h2 className="form-title"> Contact Me</h2>
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <div className="form-elements-container">
            <div>
              <input
                type="text"
                className="form-elements"
                placeholder="enter your name here"
                name="name"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-elements"
                placeholder="enter your email address here"
                name="email"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-elements"
                placeholder="what is the title of your message?"
                name="subject"
              />
            </div>
            <div>
              <textarea
                className="form-elements"
                cols="30"
                rows="8"
                placeholder="what do you want to talk about in your message?"
                name="message"
              />
            </div>
            <div>
              <input
                type="submit"
                className="form-btn"
                value="Send Your Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
// export contactme form
export default ContactMe;
