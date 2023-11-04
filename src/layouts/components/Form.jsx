import "./Form.scss";

export function Form() {
  return (
    <form className="form-container" action="" method="POST">
      <input type="text" name="name" id="name" placeholder="NAME" />
      <input type="email" name="email" id="email" placeholder="EMAIL" />
      <textarea name="message" id="message" cols="30" rows="7" placeholder="MESSAGE"></textarea>
      <button type="submit" className="submit-btn">SEND MESSAGE</button>
    </form>
  );
}
