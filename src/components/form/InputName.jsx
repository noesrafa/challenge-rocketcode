import React from "react";
import SupportImage from "../SupportImage";
import {
  FormWrapper,
  Input,
  InputsContainer,
} from "../../styles/StyledComponents";

function InputName({firstName, handleChange }) {
  return (
    <FormWrapper>
      <SupportImage />
      <InputsContainer>
        <p>¿Cuál es tu nombre?</p>
        <Input
          type="text"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => handleChange(e, "fullName", "firstName")}
        />
        <Input
          type="text"
          placeholder="Segundo nombre"
          onChange={(e) => handleChange(e, "fullName", "secondName")}
        />
        <Input
          type="text"
          placeholder="Apellido Paterno"
          onChange={(e) => handleChange(e, "fullName", "lastName")}
        />
        <Input
          type="text"
          placeholder="Apellido Materno"
          onChange={(e) => handleChange(e, "fullName", "secondLastName")}
        />
      </InputsContainer>
    </FormWrapper>
  );
}

export default InputName;
