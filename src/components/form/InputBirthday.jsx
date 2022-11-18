import React from "react";
import SupportImage from "../SupportImage";
import {
  FormWrapper,
  InputsContainer,
  Input,
} from "../../styles/StyledComponents";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function InputBirthday({ handleChange }) {
  return (
    <FormWrapper>
      <SupportImage />
      <InputsContainer>
        <p>¿Cuál es tu fecha de nacimiento?</p>
        <Input
          type="number"
          placeholder="Día"
          // value={day}
          onChange={(e) => handleChange(e, "birthday", "day")}
        />
        <select onChange={(e) => handleChange(e, "birthday", "month")}>
          <option>Mes</option>
          {months.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>

        <Input
          type="number"
          placeholder="Year"
          // value={year}
          onChange={(e) => handleChange(e, "birthday", "year")}
        />
      </InputsContainer>
    </FormWrapper>
  );
}

export default InputBirthday;
