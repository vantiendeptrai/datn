import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  disabled?: boolean;
  icon?: IconType;
};

const Button = ({
  label,
  outline,
  onClick,
  disabled,
  icon: Icon,
}: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
        relative
        w-full
        px-4
        py-3
        rounded-xl
        transition
        hover:opacity-80
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${
          outline
            ? "bg-light dark:bg-dark text-textLight dark:text-textDark border-2 border-divideLight dark:border-divideDark"
            : "bg-primary text-textDark"
        }
      `}
      >
        {Icon && (
          <Icon
            size={24}
            className="
            absolute
            left-4
            top-3
          "
          />
        )}
        {label}
      </button>
    </>
  );
};

export default Button;
