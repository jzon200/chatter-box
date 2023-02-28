import { MdLogout } from "react-icons/md";
import { useSocket } from "../context/SocketProvider";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { useUsers } from "../context/UsersProvider";
import { useNavigate } from "react-router-dom";
import CircularButton from "./CircularButton";

export default function ContactProfile() {
  const socket = useSocket();
  const [socketId, setSocketId] = useState(socket.id);
  const users = useUsers();
  const currentUser = users.find((user) => user.id === socket.id);
  const navigate = useNavigate();

  // This makes sure the socket ID is not undefined
  useEffect(() => {
    if (socketId == null) {
      socket.on("connect", () => setSocketId(socket.id));
    }
  }, []);

  return (
    <div className="flex justify-between items-center p-4 border border-l-0 border-gray-1">
      <div className="flex gap-2">
        <Avatar imageUrl="/images/avatar.png" />
        <div>
          <div className="font-medium">{currentUser?.name ?? "User"}</div>
          <div className="font-medium text-xs text-[#A7A5A5]">{`#${socketId}`}</div>
        </div>
      </div>
      <CircularButton
        icon={MdLogout}
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}
