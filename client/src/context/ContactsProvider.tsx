import { Dispatch, ReactNode, createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

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
  type: "add_contact";
  value: string;
};

function contactsReducer(draft: Contact[], action: Action) {
  switch (
    action.type
    // case "add_contact": {
    //   draft.unshift({ id: action.value, , message: "Test" });
    // }
  ) {
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
