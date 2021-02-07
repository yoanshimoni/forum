import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThreadCard from "./ThreadCard";
import PostInput from "./PostInput";
import ThreadInput from "./ThreadInput";
import { Context as ThreadContext } from "../context/ThreadContext";
import { Context as AuthContext } from "../context/AuthContext";

const PostCard = ThreadCard; // Reuse component with appropriate name

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
`;

const ThreadList = () => {
  const {
    deleteThread,
    deleteComment,
    state: { threadList },
  } = useContext(ThreadContext);

  const {
    state: { userName },
  } = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        {threadList.length ? (
          threadList.map((thread) => (
            <Container key={thread._id}>
              <ThreadCard
                publisher={thread.publisher}
                content={thread.content}
                createdDate={thread.createdDate}
                onClickDelete={() => {
                  deleteThread(thread._id);
                }}
              />
              <PostInput threadId={thread._id} />
              {thread.comments.length > 0 &&
                thread.comments.map((comment) => (
                  <PostsWrapper key={comment._id}>
                    <PostCard
                      publisher={comment.publisher}
                      content={comment.content}
                      createdDate={comment.createdDate}
                      onClickDelete={() => {
                        deleteComment(thread._id, comment._id);
                      }}
                    />
                  </PostsWrapper>
                ))}
            </Container>
          ))
        ) : (
          <h2>Loading Threads...</h2>
        )}
      </Wrapper>
      <ThreadInput />
    </Container>
  );
};
export default ThreadList;
