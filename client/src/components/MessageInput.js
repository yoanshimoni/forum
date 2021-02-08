import React, { useState, useContext } from "react";
import TextInput from "./TextInput";
import { Context as MessageContext } from "../context/MessageContext";
// import { SelectFetch } from "react-select-fetch";

const MessageInput = () => {
  //   const { createMessage } = useContext(ThreadContext);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* <SelectFetch
        url="/options/"
        value={value}
        onChange={onChange}
        get={get}
        queryParams={{
          limit: 10,
        }}
      /> */}
      <TextInput
        holderText="Text to post message"
        value={message}
        onChange={setMessage}
        onClick={() => {
          //   createMessage(message);
          setMessage("");
        }}
      />
    </>
  );
};

export default MessageInput;
