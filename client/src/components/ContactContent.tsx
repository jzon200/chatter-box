import { Outlet } from "react-router-dom";
import ChatComposer from "./ChatComposer";
import ChatHistory from "./ChatHistory";

export default function ContactContent() {
  return (
    <main className="ml-[28rem] flex flex-col h-full">
      <Outlet />
      <ChatHistory />
      <ChatComposer />
    </main>
  );
}
