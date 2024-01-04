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
                I'm excited about the prospect of contributing my skills to a
                dynamic team. If you're seeking a junior web developer who
                combines technical prowess with a creative flair, you can contact
                me via this form.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
