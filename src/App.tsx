import { useEffect, useState } from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";
import { Message } from "./Message";

import Header from "./components/Header";
import Login from "./components/Login";
import SideBar from "./components/SideBar";

const socket = new WebSocket(`ws://${import.meta.env.VITE_HOST}:8080`);
console.log(`ws://${import.meta.env.VITE_HOST}:8080`);


function App() {
  const [displayName, setDisplayName] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    //setMessages(testMessages);

    socket.addEventListener("open", (event) => {
      // socket.send("Hello Server!");
    });
    socket.addEventListener("message", (event) => {
      let incomingMessage = JSON.parse(event.data) as Message;
      console.log("Message from server ", incomingMessage);

      if (incomingMessage.type === "MESSAGE") {
        let index = messages.findIndex(
          (message: Message) => message.id == incomingMessage.id
        );

        console.log(index);
        if (index === -1) {
          console.log("setting message: ", index);
          setMessages((current) => [...current, incomingMessage]);
        }
      }
    });
  }, []);

  return (
    <>
      {!displayName && <Login updateName={setDisplayName} />}
      {displayName && (
        <>
          <div className="appContainer">
            <Header name={displayName} />
            <SideBar />
            <ChatWindow
              displayName={displayName}
              messages={messages}
              socket={socket}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
