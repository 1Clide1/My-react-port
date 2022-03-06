import { useState } from "react";
import emailjs from "@emailjs/browser";
const useForm = () => {
  const [initialForm, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // these are my error messages
  const errors = {
    name: "must be at least 4 characters long",
    email: "please enter valid email address",
    subject: "title must be at least 4 characters long",
    message: "must have something in the message",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...initialForm,
      [name]: value,
    });
  };
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
  return { handleChange, initialForm, sendEmail, errors };
};

export default useForm;
