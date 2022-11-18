import React from "react";
import SupportImage from "../SupportImage";
import {
  FormWrapper,
  Input,
  InputsContainer,
} from "../../styles/StyledComponents";

function InputContact({ handleChange, error }) {
  return (
    <FormWrapper>
      <SupportImage />
      <InputsContainer>
        <p>Datos de contacto:</p>
        <Input
          type="email" id="email"
          placeholder="Correo electrónido"
          onChange={(e) => handleChange(e, "contact", "email")}
        />
        { error.emailError ? (
              <div>Error</div>
            ) : null}
        <Input
          type="number"
          placeholder="Teléfono celular"
          onChange={(e) => handleChange(e, "contact", "cellPhone")}
        />
      </InputsContainer>
    </FormWrapper>
  );
}

export default InputContact;
