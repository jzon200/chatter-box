import { MdPersonAddAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import CircularButton from "./CircularButton";
import ContactList from "./ContactList";
import ContactProfile from "./ContactProfile";
import ContactsSearchBox from "./ContactsSearchBox";

export default function ContactsSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 flex flex-col max-w-md w-full h-screen shadow shadow-neutral-400">
      <div className="h-full flex flex-col p-4 gap-4">
        <div className="flex justify-between items-center">
          <Link to="/contacts" className="text-2xl font-bold">
            Contacts
          </Link>
          <CircularButton
            icon={MdPersonAddAlt}
            onClick={() => {
              navigate("/contacts/new");
            }}
          />
        </div>
        <ContactsSearchBox />
        <ContactList />
      </div>
      <ContactProfile />
    </aside>
  );
}
