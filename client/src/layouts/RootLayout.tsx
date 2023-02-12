import { Fragment } from "react";
import ContactsSidebar from "../components/ContactsSidebar";
import { Outlet } from "react-router-dom";

export default function ContactsLayout() {
  return (
    <Fragment>
      <ContactsSidebar />
      <Outlet />
    </Fragment>
  );
}
