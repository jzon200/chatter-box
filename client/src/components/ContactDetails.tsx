import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import ContactHeader from "./ContactHeader";

export default function ContactDetails() {
  const { contactId } = useParams();

  const socket = useSocket();
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    socket.on("users", (users: string[]) => {
      setUsers(users);
    });
  }, []);

  if (contactId == null || !users.includes(contactId)) {
    return <Navigate to="/" />;
  }

  return <ContactHeader id={contactId} />;
}
