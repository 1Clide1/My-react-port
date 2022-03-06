// import what I need here
import React, { useState } from "react";
import useForm from "../../../utils/useForm";
import "./contactMe.css";

function ContactMe() {
  const { handleChange, initialForm, sendEmail, errors } = useForm();
  const [focus, leaveFocus] = useState(false);

  const handleFocus = (e) => {
    leaveFocus(true);
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
                className="form-elements name"
                placeholder="name"
                name="name"
                pattern="[a-zA-Z]{4,}"
                required={true}
                value={initialForm.name}
                onChange={handleChange}
                onBlur={handleFocus}
                focus={focus.toString()}
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
                onFocus={handleFocus}
                focus={focus.toString()}
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
                focus={focus.toString()}
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
                focus={focus.toString()}
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
