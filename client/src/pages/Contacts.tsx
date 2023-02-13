import { Fragment } from "react";
import ContactContent from "../components/ContactContent";
import ContactsSidebar from "../components/ContactsSidebar";

export default function Contacts() {
  //   const users = useUsers();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (users.length <= 1) {
  //       navigate("/");
  //     }
  //   }, [users]);

  return (
    <Fragment>
      <ContactsSidebar />
      <ContactContent />
    </Fragment>
  );
}
