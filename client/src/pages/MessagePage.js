import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import MessageList from "../components/MessageList";
import { Context as MessageContext } from "../context/MessageContext";
import { Link } from "react-router-dom";

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  margin-bottom: 10px;
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
      <StyledLink to="/">Go To Home Page</StyledLink>
      <MessageList />
    </Container>
  );
};
export default MessagePage;
