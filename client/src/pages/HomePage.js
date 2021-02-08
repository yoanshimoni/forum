import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ThreadList from "../components/ThreadList";

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

const HomePage = () => {
  return (
    <Container>
      <StyledLink to="/messages">Go To Messages</StyledLink>
      <ThreadList />
    </Container>
  );
};
export default HomePage;
