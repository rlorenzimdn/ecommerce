import React, { useState } from "react";

const FORM_ENDPOINT = "";

function Contact() {
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
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input
          type="text"
          placeholder="Nombre"
          id="nameContact"
          name="name"
          required
        />
      </div>
      <div>
        <input type="text" placeholder="Apellido" name="surname" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Su Mensaje" name="message" required />
      </div>
      <div>
        <button type="submit"> Enviar Mensaje </button>
      </div>
    </form>
  );
}

export default Contact;
