import { Fragment } from "react";
import ContactsSidebar from "./components/ContactsSidebar";
import ContactContent from "./components/ContactContent";

export default function App() {
  return (
    <Fragment>
      <ContactsSidebar />
      <ContactContent />
    </Fragment>
  );
}
