import React, { useState } from "react";
import InputName from "./InputName";
import {
  ContinueMessage,
  FormsContainer,
  MessageFormValid,
  SubmitButton,
} from "../../styles/StyledComponents";
import InputBirthday from "./InputBirthday";
import InputContact from "./InputContact";
import SupportImage from "../SupportImage";

function Forms({ setProgress }) {
  const [fullName, setFullName] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
  });

  const [birthday, setBirthday] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [contact, setContact] = useState({
    email: "",
    cellPhone: "",
  });

  const { firstName, secondName, lastName, secondLastName } = fullName;
  const { day, month, year } = birthday;
  const { email, cellPhone } = contact;

  const handleChange = (e, formType, inputName) => {
    switch (formType) {
      case "fullName":
        setFullName({
          ...fullName,
          [inputName]: e.target.value,
        });
        if (firstName.length > 1 || lastName || secondLastName) {
          setProgress("30%");
        } else {
          setProgress("0%");
        }

        break;
      case "birthday":
        setBirthday({
          ...birthday,
          [inputName]: e.target.value,
        });
        if (day && month && year) {  
          setProgress("60%");
        } else {
          setProgress("30%");
        }
        break;
      case "contact":
        setContact({
          ...contact,
          [inputName]: e.target.value,
        });
        if (email && cellPhone) {  
          setProgress("100%");
        } else {
          setProgress("60%");
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "UserInfo",
      JSON.stringify({
        fechaNacimiento: birthday,
        correo: email,
        celular: cellPhone,
        nombre: fullName,
      })
    );

    console.log(localStorage.getItem("UserInfo"));
  };

  return (
    <>
      <FormsContainer onSubmit={handleSubmit}>
        {/* ====== FULL NAME ======= */}
        <InputName handleChange={handleChange} firstName={firstName} />
        {(firstName || lastName || secondLastName) && (
          <MessageFormValid>
            <span>Nombre: </span>
            {`${firstName} ${secondName} ${lastName} ${secondLastName} `}
          </MessageFormValid>
        )}
        {/* ======== BIRTHDAY ======= */}
        <InputBirthday handleChange={handleChange} />
        {day && month && year && (
          <MessageFormValid>
            <span>Fecha de nacimiento: </span>
            {`${day} ${month} ${year} `}
          </MessageFormValid>
        )}

        {/* ======= CONTACT ======= */}
        <InputContact handleChange={handleChange} />
        {email && cellPhone && (
          <MessageFormValid>
            <span>Correo Electrónico: </span>
            {`${email} `}
            <br />
            <span>Teléfono celular: </span>
            {`${cellPhone}`}
          </MessageFormValid>
        )}
      </FormsContainer>
      {(firstName || lastName || secondLastName) &&
        day &&
        month &&
        year &&
        email &&
        cellPhone && (
          <>
            <ContinueMessage>
              <SupportImage />
              <p>Si tus datos son correctos por favor continuemos.</p>
            </ContinueMessage>
            <SubmitButton onClick={handleSubmit}>Iniciar</SubmitButton>
            <MessageFormValid formFilled>
              <span>Fecha de nacimiento: </span>
              {`${day} ${month} ${year} `}
              <br />
              <span>Correo Electrónico: </span>
              {`${email} `}
              <br />
              <span>Teléfono celular: </span>
              {`${cellPhone}`}
              <br />
              <span>Nombre: </span>
              {`${firstName} ${secondName} ${lastName} ${secondLastName} `}
            </MessageFormValid>
          </>
        )}
    </>
  );
}

export default Forms;
