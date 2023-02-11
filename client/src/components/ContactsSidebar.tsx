import ContactList from "./ContactList";
import ContactProfile from "./ContactProfile";
import ContactsSearchBox from "./ContactsSearchBox";

export default function ContactsSidebar() {
  return (
    <aside className="fixed left-0 flex flex-col gap-4 max-w-md w-full h-screen px-8 py-4 shadow shadow-neutral-400">
      <h1 className="text-2xl font-bold">Contacts</h1>
      <ContactsSearchBox />
      <ContactList />
      <ContactProfile />
    </aside>
  );
}
