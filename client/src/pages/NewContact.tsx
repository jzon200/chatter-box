import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useSocket } from "../context/SocketProvider";
import { useUsers } from "../context/UsersProvider";

export default function NewContact() {
  const [receiverId, setReceiverId] = useState("");
  const navigate = useNavigate();
  const socket = useSocket();
  const users = useUsers();

  const sender = users.find((user) => user.id === socket.id);
  const receiver = users.find((user) => user.id === receiverId);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (receiver && sender) {
          navigate(`/contacts/${receiverId}`);
        } else {
          alert("This User Does not Exist!");
        }
      }}
      className="relative flex items-center gap-2 p-4 border-b border-gray-1">
      <div>To:</div>
      <Input
        value={receiverId}
        placeholder="Enter Valid User ID"
        onChange={(e) => setReceiverId(e.target.value)}
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-8">
        <MdCheck size={32} />
      </button>
    </form>
  );
}
