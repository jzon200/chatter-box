import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactContent from "../components/ContactContent";
import ContactsSidebar from "../components/ContactsSidebar";
import { useSocket } from "../context/SocketProvider";
import { useUsers } from "../context/UsersProvider";

export default function Contacts() {
  const users = useUsers();
  const socket = useSocket();
  const navigate = useNavigate();
  // const isLoggedIn = !users.map((user) => user.id).includes(socket.id);

  // if (!users.map((user) => user.id).includes(socket.id)) {
  //   navigate("/");
  // }

  // useEffect(() => {
  //   if (!users.map((user) => user.id).includes(socket.id)) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Fragment>
      <ContactsSidebar />
      <ContactContent />
    </Fragment>
  );
}
