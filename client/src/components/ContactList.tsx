import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts, useContactsDispatch } from "../context/ContactsProvider";
import Avatar from "./Avatar";
import { useSocket } from "../context/SocketProvider";
import { useUsers } from "../context/UsersProvider";
import { TbMessagesOff } from "react-icons/tb";

export default function ContactList() {
  const socket = useSocket();
  const contacts = useContacts();
  const dispatch = useContactsDispatch();
  const users = useUsers();

  useEffect(() => {
    socket.on("receive-message", (id: string, message: string) => {
      dispatch({
        type: "add_message",
        value: { id, message, fromUser: false },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 max-h-[45rem] h-full pr-2 overflow-y-auto">
      {contacts.length === 0 && (
        <div className="h-full flex flex-col justify-center items-center">
          <TbMessagesOff size={48} />
          <div>No Contacts Yet.</div>
        </div>
      )}

      {contacts.length > 0 &&
        contacts.map((contact, index) => {
          const userName =
            users.find((user) => user.id === contact.id)?.name ?? "User";
          const lastMessage =
            contact.messages[contact.messages.length - 1].text;

          return (
            <ContactList.Item
              key={index}
              id={contact.id}
              name={userName}
              message={lastMessage}
            />
          );
        })}
    </div>
  );
}

type ContactListItemProps = {
  id: string;
  message: string;
  name: string;
};

ContactList.Item = ({ id, name, message }: ContactListItemProps) => {
  const [isRead, setIsRead] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-2 shadow shadow-neutral-300 cursor-pointer"
      onClick={() => {
        navigate(`/contacts/${id}`);
        if (!isRead) {
          setIsRead(true);
        }
      }}>
      <Avatar imageUrl="/images/avatar.png" />
      <div className={`${!isRead && "font-bold"}`}>
        <div>{name}</div>
        {message && <div className="w-64 text-xs line-clamp-1">{message}</div>}
      </div>
      {!isRead && <div className="w-3 h-3 rounded-[50%] bg-primary" />}
    </div>
  );
};
