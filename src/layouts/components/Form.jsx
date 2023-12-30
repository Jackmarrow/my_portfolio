import { SecondaryButton } from "./SecondaryButton";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.scss";

export function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log('Hello world');
    // emailjs.sendForm('service_b4w274i', 'template_5d3emzl', form.current, 'ldgxf-CkUImT4swhr')
    //   .then((result) => {
    //       console.log(result.text);
    //       console.log('message has been sent successfully');
    //       e.target.reset();
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <form ref={form} className="form-container" onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="NAME" />
      <input type="email" name="user_email"  placeholder="EMAIL" />
      <textarea name="message" id="message" cols="30" rows="7" placeholder="MESSAGE"></textarea>
      <button className="submit-btn" type="submit">SEND MESSAGE</button>
    </form>
  );
}
