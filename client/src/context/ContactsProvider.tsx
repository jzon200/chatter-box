import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useImmerReducer } from "use-immer";
import { useSocket } from "./SocketProvider";

const ContactsContext = createContext<Contact[] | null>(null);
const ContactsDispatchContext = createContext<Dispatch<Action> | null>(null);

type Message = {
  text: string;
  fromUser: boolean;
};

type Contact = {
  id: string;
  messages: Message[];
};

export function useContacts() {
  return useContext(ContactsContext)!;
}

export function useContactsDispatch() {
  return useContext(ContactsDispatchContext)!;
}

type Action =
  | {
      type: "receive_message";
      value: { id: string; message: string };
    }
  | {
      type: "send_message";
      value: { id: string; message: string };
    };

function contactsReducer(draft: Contact[], action: Action) {
  switch (action.type) {
    case "receive_message": {
      const currentContact = draft.find(
        (contact) => contact.id === action.value.id
      );

      if (currentContact == null) {
        draft.unshift({
          id: action.value.id,
          messages: [{ text: action.value.message, fromUser: false }],
        });
      } else {
        // Add existing messages
        currentContact.messages.push({
          text: action.value.message,
          fromUser: false,
        });
      }
    }
    case "send_message": {
      const currentContact = draft.find(
        (contact) => contact.id === action.value.id
      );

      if (currentContact == null) {
        draft.unshift({
          id: action.value.id,
          messages: [{ text: action.value.message, fromUser: true }],
        });
      } else {
        // Add existing messages
        currentContact.messages.push({
          text: action.value.message,
          fromUser: true,
        });
      }
    }
  }
}

type Props = {
  children: ReactNode;
};

export default function ContactsProvider({ children }: Props) {
  const socket = useSocket();

  const [contacts, dispatch] = useImmerReducer(
    contactsReducer,
    [] as Contact[]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.on("receive-message", (id: string, message: string) => {
      dispatch({ type: "receive_message", value: { id: id, message } });
    });
  }, []);

  return (
    <ContactsContext.Provider value={contacts}>
      <ContactsDispatchContext.Provider value={dispatch}>
        {children}
      </ContactsDispatchContext.Provider>
    </ContactsContext.Provider>
  );
}
