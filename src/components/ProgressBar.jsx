import React from "react";
import styled from "styled-components";

function ProgressBar({ progress }) {
  return (
    <ProgressBarContainer>
      <StyledProgressBar progress={progress} />
    </ProgressBarContainer>
  );
}

export default ProgressBar;

const ProgressBarContainer = styled.div`
  position: sticky;
  top: 0px;
  background-color: #fff;
  padding: 10px;
  z-index: 99;
`;

const StyledProgressBar = styled.div`
  position: relative;
  background-color: var(--light-primary-color);
  height: 6px;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 10px;
  &::after {
    content: "";
    width: 0%;
    position: absolute;
    height: 6px;
    border-radius: 10px;
    background-color: var(--primary-color);
    width: ${(props) => props.progress + "%"};
    transition: 500ms;
  }
`;
