import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSocket } from "../context/SocketProvider";
import Input from "./Input";
import { useParams } from "react-router-dom";

export default function ChatComposer() {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  // const { contactId } = useParams();

  return (
    <form
      className="relative mt-auto px-4 py-2"
      onSubmit={(e) => {
        e.preventDefault();

        // if (message && contactId) {
        //   socket.emit("message", contactId, message);
        //   setMessage("");
        // }
      }}>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Aa"
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-8 text-primary">
        <RiSendPlaneFill size={32} />
      </button>
    </form>
  );
}
