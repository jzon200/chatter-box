import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useContactsDispatch } from "../context/ContactsProvider";
import { useSocket } from "../context/SocketProvider";

export default function NewContact() {
  const socket = useSocket();
  const [sendMessageTo, setSendMessageTo] = useState("");
  const dispatch = useContactsDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    socket.on("users", (users: string[]) => {
      setUsers(users);
    });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (users.includes(sendMessageTo)) {
          // Send Message to User
          socket.emit("send-message", sendMessageTo, "Hello");

          dispatch({
            type: "add_message",
            value: { id: sendMessageTo, message: "Hello", fromUser: true },
          });

          navigate(`/${sendMessageTo}`);
        } else {
          alert("This User Does not Exist!");
        }
      }}
      className="relative flex items-center gap-2 p-4 border-b border-gray-1">
      <div>To:</div>
      <Input
        value={sendMessageTo}
        onChange={(e) => setSendMessageTo(e.target.value)}
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-8">
        <MdCheck size={32} />
      </button>
    </form>
  );
}
