import { MdPersonAddAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import ContactList from "./ContactList";
import ContactProfile from "./ContactProfile";
import ContactsSearchBox from "./ContactsSearchBox";

export default function ContactsSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 flex flex-col gap-4 max-w-md w-full h-screen px-8 py-4 shadow shadow-neutral-400">
      <div className="flex justify-between items-center">
        <Link to="/contacts" className="text-2xl font-bold">
          Contacts
        </Link>
        <div
          className="p-2 rounded-[50%] hover:bg-gray-1 cursor-pointer"
          onClick={() => {
            navigate("/contacts/new");
          }}>
          <MdPersonAddAlt size={24} />
        </div>
      </div>
      <ContactsSearchBox />
      <ContactList />
      <ContactProfile />
    </aside>
  );
}
