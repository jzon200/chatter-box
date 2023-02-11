import Message from "./Message";

export default function ChatHistory() {
  return (
    <div className="flex flex-col h-screen max-h-[50rem] gap-2 p-3 overflow-y-auto">
      <Message text="Hellooo" />
      <Message text="Kuro sent a message." />
      <Message
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat
      quas sunt, repellat quasi aliquid perferendis nulla aliquam sint, quam
      consectetur perspiciatis. Cupiditate aperiam accusamus porro molestias
      saepe. Minima, deleniti?"
      />
      <Message
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat
      quas sunt, repellat quasi aliquid perferendis nulla aliquam sint, quam
      consectetur perspiciatis. Cupiditate aperiam accusamus porro molestias
      saepe. Minima, deleniti?"
      />
      <Message text="Hey Hey Hey" isAuthor />
      <Message
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat
      quas sunt, repellat quasi aliquid perferendis nulla aliquam sint, quam
      consectetur perspiciatis. Cupiditate aperiam accusamus porro molestias
      saepe. Minima, deleniti?"
      />
      <Message
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat
      quas sunt, repellat quasi aliquid perferendis nulla aliquam sint, quam
      consectetur perspiciatis. Cupiditate aperiam accusamus porro molestias
      saepe. Minima, deleniti?"
      />
    </div>
  );
}
