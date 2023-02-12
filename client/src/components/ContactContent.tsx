import { Outlet, useParams } from "react-router-dom";
import ChatComposer from "./ChatComposer";
import ChatHistory from "./ChatHistory";
import ContactHeader from "./ContactHeader";

export default function ContactContent() {
  const { contactId } = useParams();

  return (
    <main className="ml-[28rem] flex flex-col h-full">
      {/* <ContactHeader id={contactId!} /> */}
      <Outlet />
      <ChatHistory />
      <ChatComposer />
    </main>
  );
}
