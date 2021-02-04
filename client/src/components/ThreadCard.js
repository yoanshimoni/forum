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
const Date = styled.p`
  align-self: flex-end;
`;

const ThreadCard = ({ publisher, content, createdDate }) => {
  return (
    <StyledCard>
      <RemoveButton onClick={() => {}}>
        <GiCancel size="25px" />
      </RemoveButton>
      <p>{`from: ${publisher}`}</p>
      <Content>{content}</Content>
      <Date>{createdDate}</Date>
    </StyledCard>
  );
};
export default ThreadCard;
