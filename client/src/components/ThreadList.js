import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThreadCard from "./ThreadCard";
import TextInput from "./TextInput";
import { Context as ThreadContext } from "../context/ThreadContext";

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
  margin: 25px 0px 25px 200px;
`;

const ThreadList = () => {
  const [thread, setThread] = useState("");
  const [comment, setComment] = useState("");

  const {
    state: { threadList },
  } = useContext(ThreadContext);

  return (
    <Container>
      <Wrapper>
        {threadList.length ? (
          threadList.map((thread) =>
            !thread.comments.length ? ( // check if there isn't comments to this thread
              <ThreadCard
                key={thread._id}
                publisher={thread.publisher}
                content={thread.content}
                createdDate={thread.createdDate}
              />
            ) : (
              <>
                <ThreadCard
                  key={thread._id}
                  publisher={thread.publisher}
                  content={thread.content}
                  createdDate={thread.createdDate}
                />
                <PostsWrapper>
                  {thread.comments.map((comment) => (
                    <PostCard
                      key={comment._id}
                      publisher={comment.publisher}
                      content={comment.content}
                      createdDate={comment.createdDate}
                    />
                  ))}
                  <TextInput
                    holderText="Text to comment thread..."
                    value={comment}
                    onChange={setComment}
                    size="small"
                  />
                </PostsWrapper>
              </>
            )
          )
        ) : (
          <h2>Loading Threads...</h2>
        )}
      </Wrapper>
      <TextInput
        holderText="Text for new thread here..."
        value={thread}
        onChange={setThread}
      />
    </Container>
  );
};
export default ThreadList;
