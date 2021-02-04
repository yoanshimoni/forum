import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const ThreadCard = PostCard; // Reuse component with appropriate name

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
`;

const ThreadList = ({ threads }) => {
  return (
    <Container>
      {threads.length ? (
        threads.map((thread) =>
          !thread.comments.length ? ( // check if there isn't comments to this thread
            <ThreadCard
              publisher={thread.publisher}
              content={thread.content}
              createdDate={thread.createdDate}
            />
          ) : (
            <ThreadCard
              publisher={thread.publisher}
              content={thread.content}
              createdDate={thread.createdDate}
            />
            {thread.comments.map(comment => (
                <PostCard publisher={comment.publisher}
                content={comment.content}
                createdDate={comment.createdDate}
              />
            ))}
          )
        )
      ) : (
        <h2>Loading Threads...</h2>
      )}
    </Container>
  );
};
export default ThreadList;
