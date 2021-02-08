import React, { useState, useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  word-wrap: break-word;
`;
const StyledDate = styled.p`
  align-self: flex-end;
`;

const MessagePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const {
    fetchMessages,
    state: { messageList, hasMoreMessages },
  } = useContext(MessageContext);

  useEffect(() => {
    fetchMessages(pageNum);
    setPageNum((prevPageNum) => prevPageNum + 1);
  }, []);

  return (
    <Container>
      <MessageInput />
      <InfiniteScroll
        dataLength={messageList.length}
        next={() => {
          fetchMessages(pageNum);
          setPageNum((prevPageNum) => prevPageNum + 1);
        }}
        hasMore={hasMoreMessages}
        loader={<h4>Loading...</h4>}
        endMessage={<h2>End Of Messages List...</h2>}
      >
        {messageList.length > 0 &&
          messageList.map((message) => (
            <StyledCard>
              <p>{`Message From: ${message.senderName}`}</p>
              <p>{message.content}</p>
              <StyledDate>
                {new Date(message.createdDate).toUTCString()}
              </StyledDate>
            </StyledCard>
          ))}
      </InfiniteScroll>
    </Container>
  );
};
export default MessagePage;
