type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
};

const Input = ({ id, label, placeholder, disabled, type }: InputProps) => {
  return (
    <>
      <div
        className="
        "
      >
        <label
          htmlFor={id}
          className="
          text-textLight
          dark:text-textDark"
        >
          {label}
        </label>

        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className="
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
          peer"
        />
      </div>
    </>
  );
};

export default Input;
