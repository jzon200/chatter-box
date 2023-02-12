import { MdLogout } from "react-icons/md";
import Avatar from "./Avatar";
import { useSocket } from "../context/SocketProvider";
import { useEffect, useState } from "react";

export default function ContactProfile() {
  const [contactId, setContactId] = useState("");
  const socket = useSocket();

  return (
    <div className="flex justify-between items-center p-4 rounded-lg rounded-t-none hover:bg-gray-2 shadow shadow-neutral-300">
      <div className="flex gap-2">
        <Avatar imageUrl="/images/avatar.png" />
        <div>
          <div className="font-medium">Username</div>
          <div className="font-medium text-xs text-[#A7A5A5]">{`#${socket.id}`}</div>
        </div>
      </div>
      <MdLogout className="cursor-pointer" size={24} />
    </div>
  );
}
