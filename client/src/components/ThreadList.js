import React, { useContext, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import ThreadCard from "./ThreadCard";
import PostInput from "./PostInput";
import ThreadInput from "./ThreadInput";
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
  margin-left: 300px;
`;

const ThreadList = () => {
  const [pageNum, setPageNum] = useState(1);
  const {
    deleteThread,
    deleteComment,
    fetchThreads,
    state: { threadList, hasMoreThreads },
  } = useContext(ThreadContext);

  useEffect(() => {
    fetchThreads(pageNum);
    setPageNum((prevPageNum) => prevPageNum + 1);
  }, []);

  return (
    <Container>
      <ThreadInput />
      <Wrapper>
        <InfiniteScroll
          dataLength={threadList.length}
          next={() => {
            fetchThreads(pageNum);
            setPageNum((prevPageNum) => prevPageNum + 1);
          }}
          hasMore={hasMoreThreads}
          loader={<h4>Loading...</h4>}
          endMessage={<h2>End Of Threads List...</h2>}
        >
          {threadList.map((thread) => (
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
          ))}
        </InfiniteScroll>
      </Wrapper>
    </Container>
  );
};
export default ThreadList;
