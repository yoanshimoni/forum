import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px 20px;
  margin: 8px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 4px;
`;

const SignForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 0 && password.length > 0) {
      onSubmit({ name, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Password</label>
      <Input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignForm;
