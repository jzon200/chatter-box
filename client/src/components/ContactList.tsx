import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts, useContactsDispatch } from "../context/ContactsProvider";
import Avatar from "./Avatar";
import { useSocket } from "../context/SocketProvider";

export default function ContactList() {
  const socket = useSocket();
  const contacts = useContacts();
  const dispatch = useContactsDispatch();

  useEffect(() => {
    if (socket == null) return;

    socket.on("receive-message", (id: string, message: string) => {
      dispatch({
        type: "add_message",
        value: { id, message, fromUser: false },
      });
    });

    () => socket.off("receive-message");
  }, []);

  return (
    <div className="flex flex-col gap-2 max-h-[50rem] h-full pr-2 overflow-y-auto">
      {contacts.map((contact) => (
        <ContactList.Item key={contact.id} id={contact.id} />
      ))}
    </div>
  );
}

type ContactListItemProps = {
  id: string;
  message?: string;
  name?: string;
  // isRead?: boolean;
};

ContactList.Item = ({ id, name, message }: ContactListItemProps) => {
  const [isRead, setIsRead] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-2 shadow shadow-neutral-300 cursor-pointer"
      onClick={() => {
        navigate(`/contacts/${id}`, { replace: true });
        if (!isRead) {
          setIsRead(true);
        }
      }}>
      <Avatar imageUrl="/images/avatar.png" />
      <div className={`${!isRead && "font-bold"}`}>
        <div>{id}</div>
        {message && <div className="w-64 text-xs line-clamp-1">{message}</div>}
      </div>
      {!isRead && <div className="w-3 h-3 rounded-[50%] bg-primary" />}
    </div>
  );
};
