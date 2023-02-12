import { useEffect, useState } from "react";
import Message from "./Message";
import { useSocket } from "../context/SocketProvider";

export default function ChatHistory() {
  const socket = useSocket();
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    socket.on("message", (id: string, message: string) => {
      setMessages([...messages, { id, text: message }]);
    });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen max-h-[50rem] gap-2 p-3 overflow-y-auto">
      {messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          isAuthor={socket.id === message.id}
        />
      ))}
    </div>
  );
}
