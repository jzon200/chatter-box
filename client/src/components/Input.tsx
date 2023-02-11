import { forwardRef } from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={`w-full p-4 bg-gray-2 rounded-3xl focus:outline-none placeholder:text-[#050505] text ${className}`}
        ref={ref}
        type="text"
        {...rest}
      />
    );
  }
);

export default Input;
