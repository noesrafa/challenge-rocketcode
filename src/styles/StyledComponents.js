import styled, { css } from "styled-components";

// ==== HEADER ====

const HeaderContainer = styled.header`
  background: var(--primary-color);
  max-width: 1200px;
  width: 100%;
  border-radius: 0px 0px 30px 30px;
  padding: 70px 60px;
  color: white;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const WaitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// ===== FORMS =====

const FormTitle = styled.h2`
  margin-bottom: 16px;
`;

const FormsContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  width: 100%;
`;

const InputsContainer = styled.div`
  background-color: var(--gray-200);
  padding: 28px;
  width: 100%;
  border-radius: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;

  p {
    margin-bottom: 10px;
  }

  select {
    background-color: var(--gray-200);
    outline: none;
    padding: 6px 16px;
    border: 1px solid #889097;
    border-radius: 12px;
    background-color: transparent;
    width: 100%;
  }

  span {
    font-weight: 400;
  }
`;

const Input = styled.input`
  outline: none;
  padding: 8px 16px;
  border: 1px solid #889097;
  border-radius: 12px;
  background-color: transparent;
  width: 100%;
`;

const MessageFormValid = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 20px;
  align-self: right;
  right: 0;
  span {
    font-weight: 600;
  }
  ${(props) =>
    props.formFilled &&
    css`
      width: 100%;
      margin-top: 20px;
      border-radius: 20px 20px 0 0;
    `}
`;

const ContinueMessage = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  p {
    flex: 1;
    border-radius: 0 20px 20px 20px;
    background-color: var(--gray-200);
    padding: 30px;
  }
`;
const SubmitButton = styled.button`
  cursor: pointer;
  margin-top: 16px;
  background-color: var(--button-color);
  border: none;
  outline: none;
  color: #fff;
  padding: 16px 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  font-weight: 500;
  transition: 300ms;
  &:hover {
    opacity: 0.8;
  }
`;

export {
  HeaderContainer,
  WaitWrapper,
  FormsContainer,
  FormWrapper,
  InputsContainer,
  MessageFormValid,
  ContinueMessage,
  SubmitButton,
  Input,
  FormTitle
};
