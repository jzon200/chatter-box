import {
  Dispatch,
  ReactNode,
  createContext,
  useCallback,
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

type Action = {
  type: "add_message";
  value: { id: string; message: string; fromUser: boolean };
};

function contactsReducer(draft: Contact[], action: Action) {
  switch (action.type) {
    case "add_message": {
      const currentContact = draft.find(
        (contact) => contact.id === action.value.id
      );

      if (currentContact == null) {
        // Add new conversation
        draft.unshift({
          id: action.value.id,
          messages: [
            { text: action.value.message, fromUser: action.value.fromUser },
          ],
        });
      } else {
        // Add existing messages
        currentContact.messages.push({
          text: action.value.message,
          fromUser: action.value.fromUser,
        });
      }

      break;
    }
  }
}

type Props = {
  children: ReactNode;
};

export default function ContactsProvider({ children }: Props) {
  const [contacts, dispatch] = useImmerReducer(
    contactsReducer,
    [] as Contact[]
  );

  return (
    <ContactsContext.Provider value={contacts}>
      <ContactsDispatchContext.Provider value={dispatch}>
        {children}
      </ContactsDispatchContext.Provider>
    </ContactsContext.Provider>
  );
}
