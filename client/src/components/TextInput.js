import React from "react";
import styled from "styled-components";

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

const TextInput = ({ holderText = "", value, onChange, size }) => {
  return (
    <Container size={size}>
      <ThreadInput
        type="text"
        placeholder={holderText}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={() => console.log(value)}>Submit</Button>
    </Container>
  );
};

export default TextInput;
