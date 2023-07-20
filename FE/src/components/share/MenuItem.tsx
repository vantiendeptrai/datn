import { IconType } from "react-icons";

type MenuItemItemProps = {
  label: string;
  icon?: IconType;
  active?: boolean;
  onClick?: () => void;
};

const MenuItem = ({
  label,
  icon: Icon,
  onClick,
  active,
}: MenuItemItemProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
        flex
        justify-start
        items-center
        px-4
        py-3
        gap-3
        transition
        font-semibold
        cursor-pointer
        rounded-xl
        w-full
        ${
          active
            ? "bg-primary hover:opacity-80 text-light"
            : "text-textLight2nd dark:text-textDark2nd hover:bg-backgroundLight dark:hover:bg-backgroundDark"
        }
        `}
      >
        {Icon && <Icon size={20} />}

        <span className="text-left">{label}</span>
      </button>
    </>
  );
};

export default MenuItem;
