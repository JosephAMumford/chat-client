
import "./Footer.css";

type FooterProps = {
  sendMessage: any;
};

export default function Footer(props: FooterProps) {
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      messageInputHandler();
    }
  };

  const messageInputHandler = () => {
    let inputElement = document.getElementById(
      "messageInput"
    ) as HTMLInputElement;
    let message = inputElement.value;
    inputElement.value = "";
    props.sendMessage(message);
  };
  return (
    <>
      <div className="appFooter">
        <div className="footerContainer">
          <input
            id="messageInput"
            className="messageInput"
            onKeyDown={handleKeyPress}
            placeholder="Send message..."
          />
          <button className="messageSendButton" onClick={messageInputHandler}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
