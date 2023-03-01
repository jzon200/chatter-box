import { useParams } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import Message from "./Message";

export default function ChatHistory() {
  const contacts = useContacts();
  const { contactId } = useParams();

  const currentConversation = contacts.find(
    (contact) => contact.id === contactId
  );

  return (
    <div className="flex flex-col justify-end h-screen max-h-[50rem] gap-2 p-3 overflow-y-auto">
      {contacts.length > 0 &&
        currentConversation?.messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            isAuthor={message.fromUser}
          />
        ))}
    </div>
  );
}
