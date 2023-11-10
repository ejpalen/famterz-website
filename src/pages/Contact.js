import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../images/footerImg.png";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [submitButtonText, setSubmitButtonText] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitButtonText("Message Sending...");

    emailjs
      .sendForm(
        "service_v15bb89",
        "template_820ncbt",
        form.current,
        "mdMfzEGTXq2_--3G5"
      )
      .then(
        (result) => {
          e.target.reset();

          // Change the submit button text to "Sent!" after successful submission
          setSubmitButtonText("Message Sent!");

          // After 3 seconds, revert the submit button text back to "Submit" and reset the input fields
          setTimeout(() => {
            setSubmitButtonText("Send");
            setFname("");
            setLname("");
            setEmail("");
            setSubject("");
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setSubmitButtonText("Send");
        }
      );
  };

  //Input fields
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <div
            className="contact-left bg"
            style={{ backgroundImage: `url(${contactImg})` }}
          >
            <h1>Contact Us</h1>
            <p>
              If you have any inquiries or face any difficulty, we will respond
              to you as soon as possible.
            </p>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-column">
                <div className="input">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="from_fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="from_lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="input">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                className="submit"
                value={submitButtonText}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
