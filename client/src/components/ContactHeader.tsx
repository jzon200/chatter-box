import Avatar from "./Avatar";

export default function ContactHeader() {
  return (
    <header className="flex items-center gap-4 px-2 py-4 border-b border-gray-1">
      <Avatar imageUrl="/images/kuro.jpg" />
      <h1 className="font-medium">Kuro</h1>
    </header>
  );
}
