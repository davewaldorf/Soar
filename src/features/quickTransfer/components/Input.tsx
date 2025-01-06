import React from "react";
import styled from "styled-components";
import icons from "../icons";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #718ebf;
  margin-right: 10px;
  white-space: nowrap;
`;

const InputAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-grow: 1;
  height: 50px;
  background: #edf1f7;
  border-radius: 50px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: 100%;
  padding: 0 15px;
  font-size: 16px;
  color: #718ebf;
  background: transparent;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 125px;
  height: 100%;
  background: #232323;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 18px -2px rgba(231, 228, 232, 0.8);
  border-radius: 50px;
  padding: 0 15px;
  }
`;

interface InputSectionProps {
  amount: string;
  setAmount: (value: string) => void;
  onSendClick: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  amount,
  setAmount,
  onSendClick,
}) => {
  return (
    <InputContainer>
      <Label>Write Amount</Label>
      <InputAndButtonWrapper>
        <StyledInput
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <SendButton onClick={onSendClick}>
          Send
            <img src={icons.paperPlane} alt="Paper Plane" />
        </SendButton>
      </InputAndButtonWrapper>
    </InputContainer>
  );
};

export default InputSection;
