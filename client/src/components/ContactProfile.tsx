import { MdLogout } from "react-icons/md";
import Avatar from "./Avatar";

export default function ContactProfile() {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg rounded-t-none hover:bg-gray-2 shadow shadow-neutral-300">
      <div className="flex gap-2">
        <Avatar imageUrl="/images/muning.jpg" />
        <div>
          <div className="font-medium">Muning</div>
          <div className="font-medium text-xs text-[#A7A5A5]">#8A8A</div>
        </div>
      </div>
      <MdLogout className="cursor-pointer" size={24} />
    </div>
  );
}
