import React, { useState } from "react";
import "./styles.scss";

const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Gracias!</h2>
        <div>Nos pondremos en contacto a la brevedad.</div>
      </>
    );
  }

  return (
    <form
      className="form__container"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input
          className="form__control"
          type="text"
          placeholder="Nombre"
          id="nameContact"
          name="name"
          required
        />
      </div>
      <div>
        <input className="form__control" type="text" placeholder="Apellido" name="surname" required />
      </div>
      <div>
        <input className="form__control" type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea className="form__control" placeholder="Su Mensaje" name="message" required />
      </div>
      <div>
        <button className="btn__Contact" type="submit"> Enviar Mensaje </button>
      </div>
    </form>
  );
};

export default Contact;
