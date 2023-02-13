import { Fragment } from "react";
import ContactContent from "./components/ContactContent";
import ContactsSidebar from "./components/ContactsSidebar";

// TODO: Add Authentication
export default function App() {
  return (
    <Fragment>
      <ContactsSidebar />
      <ContactContent />
    </Fragment>
  );
}
