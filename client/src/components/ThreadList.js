import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThreadCard from "./ThreadCard";
import TextInput from "./TextInput";
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
  const [thread, setThread] = useState("");
  const [comment, setComment] = useState("");

  const {
    createThread,
    deleteThread,
    createComment,
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
          threadList.map((thread, b) => (
            <Container key={thread._id}>
              <ThreadCard
                publisher={thread.publisher}
                content={thread.content}
                createdDate={thread.createdDate}
                onClickDelete={() => {
                  deleteThread(thread._id);
                }}
              />
              <TextInput
                holderText="Text to comment thread..."
                value={comment}
                onChange={setComment}
                onClick={() => {
                  createComment(comment, thread._id);
                  setComment("");
                }}
                size="small"
              />
              {thread.comments.length &&
                thread.comments.map((comment, i) => (
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
      <TextInput
        holderText="Text for new thread here..."
        value={thread}
        onChange={setThread}
        onClick={() => {
          createThread(thread);
          setThread("");
        }}
      />
    </Container>
  );
};
export default ThreadList;
