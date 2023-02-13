import { Outlet, useLocation } from "react-router-dom";
import ChatComposer from "./ChatComposer";
import ChatHistory from "./ChatHistory";

export default function ContactContent() {
  const location = useLocation();

  return (
    <main className="ml-[28rem] flex flex-col h-full">
      <Outlet />
      <ChatHistory />
      {location.pathname.includes("/contacts/") && <ChatComposer />}
    </main>
  );
}
