import { IconType } from "react-icons";

type MenuItemItemProps = {
  label: string;
  icon?: IconType;
  onClick: () => void;
  type?: "default" | "detail" | "details";
};

const MenuItem = ({ label, icon: Icon, onClick, type }: MenuItemItemProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
${
  type === "default" &&
  "flex justify-start items-center gap-3 px-4 py-3 w-full transition font-semibold cursor-pointer text-textLight2nd dark:text-textDark2nd hover:bg-backgroundLight dark:hover:bg-backgroundDark"
}

${
  type === "detail" &&
  "flex justify-start mr-4 items-center transition font-semibold cursor-pointer  dark:text-textDark2nd dark:hover:bg-backgroundDark py-2 px-3  rounded-[5px] bg-[#002864] text-[#ffffff] hover:bg-yellow-500"
}

${
  type === "details" &&
  "w-[360px] ml-[10px] my-4 py-2  rounded-[5px] bg-[#002864] text-[#ffffff] hover:bg-yellow-500"
}
        
        `}
      >
        {Icon && <Icon size={16} />}

        {label}
      </button>
    </>
  );
};

export default MenuItem;
