import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import MessageList from "../components/MessageList";
import { Context as MessageContext } from "../context/MessageContext";

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 40%;
  margin: 10px;
`;

const MessagePage = () => {
  const {
    fetchMessages,
    state: { messageList },
  } = useContext(MessageContext);

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <Container>
      <MessageList />
    </Container>
  );
};
export default MessagePage;
