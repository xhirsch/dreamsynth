import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://dreamsynth-server.herokuapp.com/");

socket.on("connect", () => {
  socket.on("getMsg", (data) => {
    console.log(data);
  });
});

///////////////////////////////////////
// APP

const App = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    socket.on("getMsg", (data) => {
      setMsg(data);
    });
  });

  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
};

export default App;
