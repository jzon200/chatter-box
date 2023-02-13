import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useContactsDispatch } from "../context/ContactsProvider";
import { useSocket } from "../context/SocketProvider";
import { useUsers } from "../context/UsersProvider";

export default function NewContact() {
  const socket = useSocket();
  const [receiverId, setReceiverId] = useState("");
  const dispatch = useContactsDispatch();
  const navigate = useNavigate();

  const users = useUsers();
  const sender = users.find((user) => user.id === socket.id);
  const receiver = users.find((user) => user.id === receiverId);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (receiver && sender) {
          // Send Message to User
          socket.emit("send-message", receiverId, "Hello");

          dispatch({
            type: "add_message",
            value: { id: receiverId, message: "Hello", fromUser: true },
          });

          navigate(`/contacts/${receiverId}`);
        } else {
          alert("This User Does not Exist!");
        }
      }}
      className="relative flex items-center gap-2 p-4 border-b border-gray-1">
      <div>To:</div>
      <Input
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-8">
        <MdCheck size={32} />
      </button>
    </form>
  );
}
