// import what I need here
import React, { useState } from "react";
import useForm from "../../../utils/useForm";
import "./contactMe.css";

function ContactMe() {
  const { handleChange, initialForm, sendEmail, errors } = useForm();
  // states for all input fields that way I can properly display the form validation
  const [nameFocus, leaveFocus] = useState(false);
  const [emailFocus, leaveEmailFocus] = useState(false);
  const [subjectFocus, leaveSubjectFocus] = useState(false);
  const [messageFocus, leaveMessageFocus] = useState(false);

  const handleFocus = (e) => {
    if (e.target.name === "name") leaveFocus(!nameFocus);
    else if (e.target.name === "email") leaveEmailFocus(!emailFocus);
    else if (e.target.name === "subject") leaveSubjectFocus(!subjectFocus);
    else {
      leaveMessageFocus(!messageFocus);
    }
  };
  console.log(initialForm);
  return (
    <div className="contact-me-container" id="Contact Me">
      <div className="form-title-container">
        <h2 className="form-title"> Contact Me</h2>
        <h2 className="form-title ">
          <a
            className="email email-link"
            href="mailto:brandonjustindiaz@yahoo.com"
          >
            Or Email Me at brandonjustindiaz@yahoo.com
          </a>
        </h2>
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <div className="form-elements-container">
            <div>
              <input
                type="text"
                className="form-elements name"
                placeholder="name"
                name="name"
                pattern="[a-zA-Z]{4,}"
                required={true}
                value={initialForm.name}
                onChange={handleChange}
                onBlur={handleFocus}
                focus={nameFocus.toString()}
              />
              <span>{errors.name}</span>
            </div>
            <div>
              <input
                type="email"
                className="form-elements"
                placeholder="email address"
                name="email"
                pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
                required={true}
                value={initialForm.email}
                onChange={handleChange}
                onBlur={handleFocus}
                focus={emailFocus.toString()}
              />
              <span> {errors.email} </span>
            </div>
            <div>
              <input
                type="text"
                className="form-elements"
                placeholder="title"
                name="subject"
                pattern="^[a-zA-Z]{4,}$"
                required={true}
                value={initialForm.subject}
                onChange={handleChange}
                onBlur={handleFocus}
                focus={subjectFocus.toString()}
              />
              <span> {errors.subject} </span>
            </div>
            <div>
              <textarea
                className="form-elements"
                cols="30"
                rows="8"
                placeholder="what do you want to talk about in your message?"
                name="message"
                pattern="^[0-9a-zA-Z]{1,}$"
                required={true}
                value={initialForm.message}
                onChange={handleChange}
                onBlur={handleFocus}
                focus={messageFocus.toString()}
              />

              <span> {errors.message} </span>
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
