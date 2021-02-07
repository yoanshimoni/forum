import React, { useContext } from "react";
import styled from "styled-components";
import { Context as ThreadContext } from "../context/ThreadContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.size === "small" ? "40%" : "80%")};
`;
const ThreadInput = styled.textarea`
  height: 80px;
  font-size: 20px;
`;

const Button = styled.button`
  margin-left: 3px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const TextInput = ({ holderText = "", value, onChange, onClick, size }) => {
  return (
    <Container size={size}>
      <ThreadInput
        type="text"
        placeholder={holderText}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onClick}>Submit</Button>
    </Container>
  );
};

export default TextInput;
