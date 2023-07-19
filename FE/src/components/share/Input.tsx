import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input = ({
  id,
  label,
  type,
  disabled,
  required,
  placeholder,
  register,
  errors,
}: InputProps) => {
  return (
    <>
      <div
        className="
        w-full
        relative
        "
      >
        <label
          htmlFor={id}
          className={`
          text-textLight
          dark:text-textDark
          ${
            errors[id]
              ? "text-red-500 dark:text-red-500"
              : "text-textLight dark:text-textDark"
          }
          `}
        >
          {label}
        </label>

        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required })}
          className={`
          w-full
          px-4
          py-3
          rounded-xl
          transition
          outline-none
          border-2
          disabled:opacity-70
          disabled:cursor-not-allowed
          border-divideLight
          dark:border-divideDark
          bg-light
          dark:bg-dark
          text-textLight2nd
          dark:text-textDark2nd
          ${
            errors[id]
              ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
              : "border-divideLight focus:border-divideLight dark:border-divideDark dark:focus:border-divideDark"
          }
          `}
        />
      </div>
    </>
  );
};

export default Input;
