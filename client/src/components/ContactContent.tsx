import ChatComposer from "./ChatComposer";
import ChatHistory from "./ChatHistory";
import ContactHeader from "./ContactHeader";

export default function ContactContent() {
  return (
    <main className="ml-[28rem] flex flex-col h-full">
      <ContactHeader />
      <ChatHistory />
      <ChatComposer />
    </main>
  );
}
