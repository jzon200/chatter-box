import { useParams } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import Message from "./Message";

export default function ChatHistory() {
  // const socket = useSocket();
  const contacts = useContacts();
  const { contactId } = useParams();

  const currentConversation = contacts.find(
    (contact) => contact.id === contactId
  );

  //! Current Issue: Displaying the Message Twice when the message is received

  // const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);

  // useEffect(() => {
  //   socket.on("message", (id: string, message: string) => {
  //     setMessages([...messages, { id, text: message }]);
  //   });
  // }, [messages]);

  return (
    <div className="flex flex-col h-screen max-h-[50rem] gap-2 p-3 overflow-y-auto">
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
