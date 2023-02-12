import Avatar from "./Avatar";

type Props = {
  id: string;
};

export default function ContactHeader({ id }: Props) {
  return (
    <header className="flex items-center gap-4 px-2 py-4 border-b border-gray-1">
      <Avatar imageUrl="/images/avatar.png" />
      <h1 className="font-medium">{id}</h1>
    </header>
  );
}
