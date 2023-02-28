import { MouseEventHandler, createElement } from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function CircularButton({ icon, onClick }: Props) {
  return (
    <button
      className="p-2 rounded-[50%] hover:bg-gray-1 cursor-pointer"
      onClick={onClick}>
      {createElement(icon, { size: 24 })}
    </button>
  );
}
