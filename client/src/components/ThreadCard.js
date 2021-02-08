import React from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 40%;
  margin: 10px;
  word-wrap: break-word;
`;
const RemoveButton = styled.div`
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const Content = styled.p`
  margin-left: 3px;
`;
const StyledDate = styled.p`
  align-self: flex-end;
`;

const ThreadCard = ({ publisher, content, createdDate, onClickDelete }) => {
  return (
    <StyledCard>
      <RemoveButton onClick={onClickDelete}>
        <GiCancel size="25px" />
      </RemoveButton>
      <p>{`from: ${publisher}`}</p>
      <Content>{content}</Content>
      <StyledDate>{new Date(createdDate).toUTCString()}</StyledDate>
    </StyledCard>
  );
};

export default ThreadCard;
