import { useEffect, useState } from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";
import { Message } from "./Message";

import Header from "./components/Header";
import Login from "./components/Login";
import SideBar from "./components/SideBar";

const socket = new WebSocket("ws://localhost:8080");

const testMessages: Message[] = [
  {
    content: "Hello",
    id: "100",
    participantId: "user 1",
    timestamp: "1",
    type: "MESSAGE",
  },
  {
    content: "Hi",
    id: "101",
    participantId: "user 2",
    timestamp: "2",
    type: "MESSAGE",
  },
  {
    content: "What are you doing?",
    id: "102",
    participantId: "user 1",
    timestamp: "3",
    type: "MESSAGE",
  },
  {
    content: "Nothing much",
    id: "103",
    participantId: "user 2",
    timestamp: "4",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "104",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "105",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "106",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "107",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "108",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "109",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
  {
    content: "Cool",
    id: "110",
    participantId: "user 1",
    timestamp: "5",
    type: "MESSAGE",
  },
];

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
