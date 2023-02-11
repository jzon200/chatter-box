import Input from "./Input";
import { MdSearch } from "react-icons/md";

export default function ContactsSearchBox() {
  return (
    <div className="relative text-[#050505]">
      <MdSearch
        className="absolute left-4 top-1/2 -translate-y-1/2"
        size={24}
      />
      <Input className="pl-12" placeholder="Search" />
    </div>
  );
}
