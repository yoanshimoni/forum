import React, { useState, useContext } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { Context as ThreadContext } from "../context/ThreadContext";

const ThreadInput = () => {
  const { createThread } = useContext(ThreadContext);
  const [thread, setThread] = useState("");

  return (
    <TextInput
      holderText="Text for new thread here..."
      value={thread}
      onChange={setThread}
      onClick={() => {
        createThread(thread);
        setThread("");
      }}
    />
  );
};

export default ThreadInput;
