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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                pariatur porro nisi distinctio harum praesentium voluptates
                veritatis cupiditate omnis perferendis!
              </p>
            </div>
            <Form/>
          </div>
        </div>
      </section>
    </>
  );
}
