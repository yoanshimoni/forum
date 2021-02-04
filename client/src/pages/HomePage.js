import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ThreadList from "../components/ThreadList";
import { Context as ThreadContext } from "../context/ThreadContext";

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;

const HomePage = () => {
  const { getThreads } = useContext(ThreadContext);

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <Container>
      <ThreadList />
    </Container>
  );
};
export default HomePage;
