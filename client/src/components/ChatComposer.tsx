import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSocket } from "../context/SocketProvider";
import Input from "./Input";
import { useParams } from "react-router-dom";
import { useContactsDispatch } from "../context/ContactsProvider";

type Props = {};

export default function ChatComposer() {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const { contactId } = useParams();
  const dispatch = useContactsDispatch();

  return (
    <form
      className="relative mt-auto px-4 py-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (message && contactId) {
          socket.emit("send-message", contactId, message);
          setMessage("");
          dispatch({ type: "send_message", value: { id: contactId, message } });
        }
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
