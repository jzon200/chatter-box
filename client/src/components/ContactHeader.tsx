import Avatar from "./Avatar";

type Props = {
  name: string;
};

export default function ContactHeader({ name }: Props) {
  return (
    <header className="flex items-center gap-4 px-2 py-4 border-b border-gray-1">
      <Avatar imageUrl="/images/avatar.png" />
      <h1 className="font-medium">{name}</h1>
    </header>
  );
}
