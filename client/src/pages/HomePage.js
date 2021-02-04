import React from "react";
import styled from "styled-components";
import ThreadList from "../components/ThreadList";

const threads = [
  {
    id: 1,
    publisher: "kuku",
    content: "My First Thread",
    createdDate: "20/03/2019 15:55",
    comments: [
      {
        id: 1,
        publisher: "kuku1",
        content: "My First Comment",
        createdDate: "20/03/2019 15:56",
      },
      {
        id: 2,
        publisher: "kuku2",
        content: "My Second Comment",
        createdDate: "20/03/2019 15:57",
      },
    ],
  },
  {
    id: 2,
    publisher: "kuku1",
    content: "My Second Thread",
    createdDate: "20/03/2019 15:55",
    comments: [],
  },
];

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <Container>
      <ThreadList threads={threads} />
    </Container>
  );
};
export default HomePage;
