import { SecondaryButton } from "./SecondaryButton";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import "./Form.scss";

const success = () => toast.success('Message sent succefully.');
const error = () => toast.error('Something went wrong');

export function Form() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b4w274i', 'template_5d3emzl', form.current, 'ldgxf-CkUImT4swhr')
      .then(() => {
        e.target.reset();
        success();
      })
      .catch(()=> error())
  };

  return (
    <form ref={form} className="form-container" onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="NAME"  required autoComplete="off"/>
      <input type="email" name="user_email"  placeholder="EMAIL"  required autoComplete="off"/>
      <textarea name="message" id="message" cols="30" rows="7" placeholder="MESSAGE" required autoComplete="off"></textarea>
      <button className="submit-btn" type="submit">SEND MESSAGE</button>
      <Toaster position="bottom-left" reverseOrder={false}/>
    </form>
  );
}
