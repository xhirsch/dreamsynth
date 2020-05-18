import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";

///////////////////////////////////////
// SOCKET CONNECTION
const socket = io("https://dreamsynth-server.herokuapp.com/");

socket.on("connect", () => {
  socket.on("getMsg", (data) => {
    console.log(data);
  });
});

///////////////////////////////////////
// APP

const StyledApp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    text-align: center;
    color: white;
    font-size: 5rem;
  }
`;

const App = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    socket.on("getMsg", (data) => {
      setMsg(data);
    });
  });

  return (
    <StyledApp>
      <h1>{msg}</h1>
    </StyledApp>
  );
};

export default App;
