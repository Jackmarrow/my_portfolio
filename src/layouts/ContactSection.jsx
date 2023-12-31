import "./ContactSection.scss";
import { Form } from "./components/Form";

export function ContactSection() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-text">
              <h1>Contact</h1>
              <p>
                if you like what you've seen so far and would like to get in
                touch, talk to me about a collaboration project or just say
                hello, contact me via this form.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
