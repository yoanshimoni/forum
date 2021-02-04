import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 40%;
`;
const Content = styled.p`
  margin-left: 3px;
`;
const Date = styled.p`
  align-self: flex-end;
`;

const PostCard = ({ publisher, content, createdDate }) => {
  return (
    <StyledCard>
      <p>{`from: ${publisher}`}</p>
      <Content>{content}</Content>
      <Date>{createdDate}</Date>
    </StyledCard>
  );
};
export default PostCard;
