import { ChangeEvent } from "react";

type InputProps = {
  id: string;
  label: string;
  value: string | number;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Input = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  type,
}: InputProps) => {
  return (
    <>
      <div
        className="
        relative"
      >
        <label
          htmlFor={id}
          className="
          text-textLight"
        >
          {label}
        </label>

        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="
          w-full
          px-4
          py-3
          outline-none
          rounded-xl
          text-textLight2nd
          peer"
        />
      </div>
    </>
  );
};

export default Input;
