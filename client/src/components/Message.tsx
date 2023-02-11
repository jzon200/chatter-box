type Props = {
  text: string;
  isAuthor?: boolean;
};

export default function Message({ text, isAuthor }: Props) {
  return (
    <div
      className={`w-fit max-w-xs px-3 py-2 rounded-3xl ${
        isAuthor ? "ml-auto bg-primary text-white" : "bg-[#E4E6EB]"
      }`}>
      {text}
    </div>
  );
}
