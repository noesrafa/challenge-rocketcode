import React from "react";
import { AboutIcon, ClockIcon } from "../styles/Icons";
import { HeaderContainer, FormTitle, WaitWrapper } from "../styles/StyledComponents";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <FormTitle>Título del formulario</FormTitle>
        <WaitWrapper>
          <ClockIcon />
          <p>En menos de 5 minutos</p>
        </WaitWrapper>
      </div>
      <AboutIcon />
    </HeaderContainer>
  );
};

export default Header;


