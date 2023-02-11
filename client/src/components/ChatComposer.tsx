import { RiSendPlaneFill } from "react-icons/ri";
import Input from "./Input";

export default function ChatComposer() {
  return (
    <div className="mt-auto px-4 py-2">
      <div className="relative">
        <Input placeholder="Aa" />
        <RiSendPlaneFill
          size={32}
          className="absolute top-1/2 -translate-y-1/2 right-4 text-primary cursor-pointer"
        />
      </div>
    </div>
  );
}
