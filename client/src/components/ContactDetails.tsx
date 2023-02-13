import { useParams } from "react-router-dom";
import { useUsers } from "../context/UsersProvider";
import ContactHeader from "./ContactHeader";

export default function ContactDetails() {
  const { contactId } = useParams();
  const users = useUsers();
  const user = users.find((u) => u.id === contactId);

  return <ContactHeader name={user?.name ?? "User"} />;
}
