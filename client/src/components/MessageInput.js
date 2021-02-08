import React, { useState, useContext } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { Context as MessageContext } from "../context/MessageContext";

const RecipientInput = styled.input`
  height: 40px;
  font-size: 20px;
  margin: 4px;
`;

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const { createMessage } = useContext(MessageContext);

  return (
    <div>
      <>
        <label>
          Send To:
          <RecipientInput
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </label>
        <TextInput
          holderText="Text to post message"
          value={message}
          onChange={setMessage}
          onClick={() => {
            createMessage(message, recipient);
            setMessage("");
            setRecipient("");
          }}
        />
      </>
    </div>
  );
};

export default MessageInput;
