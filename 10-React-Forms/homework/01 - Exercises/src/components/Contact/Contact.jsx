import React from "react";
import "./Contact.modules.css";
import { useState } from "react";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//const regexName = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/

export function validate(inputs) {
  const errors = {};

  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  } else if (inputs.name.length < 3 || inputs.name.length > 20) {
    errors.name = "El nombre debe tener minimo 3 caracteres maximo 20";
  } else if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(inputs.name)) {
    errors.name = "Sólo ingrese letras";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.phone < 0) {
    errors.phone = "Sólo números positivos";
  } else if (inputs.phone.length > 11) {
    errors.phone = "Debe tener 11 digitos";
  }
  if (!inputs.subject) {
    errors.subject = "Se requiere un asunto";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  if (!inputs.peso || inputs.peso > 40 || inputs.peso < 150) {
    errors.peso = "Se requiere un peso entre 40 y 150";
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    peso: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.keys(errors).length) {
      window.alert("Datos completos");

      setInputs({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        peso: "",
      });
    } else {
      window.alert("Debes corregir los errores");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        <p className="danger">{errors.name}</p>

        <label>Peso:</label>
        <input
          name="peso"
          placeholder="Escribe tu peso..."
          type="number"
          min="40"
          max="150"
          value={inputs.peso}
          onChange={handleChange}
          className={errors.peso && "warning"}
        />
        <p className="danger">{errors.peso}</p>

        <label>Correo Electrónico:</label>
        <input
          name="email"
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className="danger">{errors.email}</p>

        <label>Teléfono:</label>
        <input
          name="phone"
          placeholder="Escribe un teléfono..."
          type="number"
          value={inputs.phone}
          onChange={handleChange}
          className={errors.phone && "warning"}
        />
        <p className="danger">{errors.phone}</p>

        <label>Asunto:</label>
        <input
          name="subject"
          placeholder="Escribe el asunto..."
          type="text"
          value={inputs.subject}
          onChange={handleChange}
          className={errors.subject && "warning"}
        />
        <p className="danger">{errors.subject}</p>

        <label>Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        <p className="danger">{errors.message}</p>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
