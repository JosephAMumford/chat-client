import { Message } from "../Message";
import "./ChatWindow.css";
import Footer from "./Footer";

type ChatWindowProps = {
  displayName: string;
  messages: any[];
  socket: any;
};

export default function ChatWindow(props: ChatWindowProps) {
  const getMessageList = () => {
    const messageList = props.messages.map((message: Message) => {
      console.log(message);
      return (
        <div className="messageContainer" key={`message-${message.id}`}>
          <div className="messageUser">{message.participantId} </div>
          <div className="message">{message.content}</div>
        </div>
      );
    });

    return <>{messageList}</>;
  };

  const sendMessage = (message: string) => {
    let newMessage = {
      content: message,
      participantId: props.displayName,
      type: "MESSAGE",
    };
    props.socket.send(JSON.stringify(newMessage));
  };

  return (
    <>
      <div className="appMain">
        <div className="chatWindowContainer">{getMessageList()}</div>
        <Footer sendMessage={sendMessage} />
      </div>
    </>
  );
}
