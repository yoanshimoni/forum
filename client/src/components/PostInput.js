import React, { useState, useContext } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { Context as ThreadContext } from "../context/ThreadContext";

const PostInput = ({ threadId }) => {
  const { createComment } = useContext(ThreadContext);
  const [comment, setComment] = useState("");

  return (
    <TextInput
      holderText="Text to comment thread..."
      value={comment}
      onChange={setComment}
      onClick={() => {
        createComment(comment, threadId);
        setComment("");
      }}
      size="small"
    />
  );
};

export default PostInput;
