import React from "react";
import styled from "styled-components";
import selfie from "../assets/support-image.png";
import { CoruIcon } from "../styles/Icons";

function SupportImage() {
  return (
    <SupportImageContainer>
      <img src={selfie} alt="Selfie" />
      <div className="logo">
        <CoruIcon color={"#F16464"}/>
      </div>
    </SupportImageContainer>
  );
}

export default SupportImage;

const SupportImageContainer = styled.div`
  padding: 4px;
  border-radius: 26px;
  display: flex;
  border: 1px solid var(--primary-color);
  position: relative;

  img {
    width: 56px;
    height: 70px;
    object-fit: cover;
    border-radius: 20px;
  }

  .logo {
    position: absolute;
    bottom: -16px;
    right: -16px;
  }
`;
