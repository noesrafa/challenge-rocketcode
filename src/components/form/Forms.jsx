import React, { useEffect, useState } from "react";
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

  const [error, setError] = useState({
    emailError: false,
    phoneError: false,
  });

  const { firstName, secondName, lastName, secondLastName } = fullName;
  const { day, month, year } = birthday;
  const { email, cellPhone } = contact;

  //Set progress bar
  useEffect(() => {
    if (firstName.length > 1 && lastName && secondLastName) {
      setProgress(33);
    }
    if (day && month && year) {
      setProgress(66);
    }
    if (email && cellPhone) {
      setProgress(100);
    }
  }, [fullName, birthday, contact]);

  //Set error in contact
  useEffect(() => {
    const validateEmail = (email) => {
      if (
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          email
        )
      ) {
        setError({
          ...error,
          emailError: false,
        });
      } else {
        setError({
          ...error,
          emailError: true,
        });
      }
    };
    if (email.length > 3) {
      validateEmail(email);
    } else {
      setError({
        ...error,
        emailError: false,
      });
    }
  }, [email]);

  useEffect(() => {
    const validatePhone = (phone) => {
      if (phone.length > 10) {
        setError({
          ...error,
          phoneError: true,
        });
      } else {
        setError({
          ...error,
          phoneError: false,
        });
      }
    };

    if (cellPhone.length > 3) {
      validatePhone(cellPhone);
    }
  }, [cellPhone]);

  const handleChange = (e, formType, inputName) => {
    switch (formType) {
      case "fullName":
        setFullName({
          ...fullName,
          [inputName]: e.target.value,
        });

        break;
      case "birthday":
        setBirthday({
          ...birthday,
          [inputName]: e.target.value,
        });
        break;
      case "contact":
        setContact({
          ...contact,
          [inputName]: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem(
      "UserInfo",
      JSON.stringify({
        fechaNacimiento: birthday,
        correo: email,
        celular: cellPhone,
        nombre: fullName,
      })
    );

    console.log(sessionStorage.getItem("UserInfo"));
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
        <InputContact handleChange={handleChange} error={error} />
        {email && cellPhone && (
          <MessageFormValid>
            <span>Correo Electr??nico: </span>
            {`${email} `}
            <br />
            <span>Tel??fono celular: </span>
            {`${cellPhone}`}
          </MessageFormValid>
        )}
      </FormsContainer>
      {(firstName || lastName || secondLastName) &&
        day &&
        month &&
        year &&
        email &&
        cellPhone &&
        !error.emailError &&
        !error.phoneError &&
        email.length > 3 &&
        cellPhone.length > 7 && (
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
              <span>Correo Electr??nico: </span>
              {`${email} `}
              <br />
              <span>Tel??fono celular: </span>
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
