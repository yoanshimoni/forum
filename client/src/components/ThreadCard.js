import React from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 40%;
`;
const RemoveButton = styled.div`
  align-self: flex-end;
`;
const Content = styled.p`
  margin-left: 3px;
`;
const StyledDate = styled.p`
  align-self: flex-end;
`;

const ThreadCard = ({ publisher, content, createdDate }) => {
  const date = new Date(createdDate);

  return (
    <StyledCard>
      <RemoveButton onClick={() => {}}>
        <GiCancel size="25px" />
      </RemoveButton>
      <p>{`from: ${publisher}`}</p>
      <Content>{content}</Content>
      <StyledDate>{date.toUTCString()}</StyledDate>
    </StyledCard>
  );
};

export default ThreadCard;
