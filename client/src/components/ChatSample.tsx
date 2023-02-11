import { FormEvent, useEffect, useState } from "react";
import io from "socket.io-client";

const ChatSample = () => {
  const [socket] = useState(() => io("http://localhost:3000"));
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>React & Socket.io Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form className="chat-form">
        <input
          type="text"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};

export default ChatSample;
