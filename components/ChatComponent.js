import { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from "../styles/chat.module.css";

const socket = io(); // Connect to server

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleMessageSend = () => {
    socket.emit("message", { message: newMessage });
    setNewMessage("");
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.inputField}
          placeholder="Type your message here..."
        />
        <button onClick={handleMessageSend} className={styles.sendButton}>
          Send
        </button>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;







