import React, { useState, useContext } from "react";
import styled from "styled-components";
import MessageInput from "../components/MessageInput";
import { Context as MessageContext } from "../context/MessageContext";

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 40%;
  margin: 10px;
`;

const MessagePage = () => {
  const [message, setMessage] = useState("");
  const {
    state: { messageList },
  } = useContext(MessageContext);

  return (
    <Container>
      {messageList.length > 0 &&
        messageList.map((message) => (
          <StyledCard>
            <p>{`from: ${message.senderName}`}</p>
            <p>{message.content}</p>
          </StyledCard>
        ))}
      <MessageInput />
    </Container>
  );
};
export default MessagePage;
