type AvatarProps = {
  imageUser: string | null;
};

const Avatar = ({ imageUser }: AvatarProps) => {
  return (
    <>
      <img
        width={100}
        height={100}
        alt="Avatar"
        src={imageUser || "/user.jpg"}
        className="
        rounded-full
        max-w-[2.5rem]
        max-h-[2.5rem]"
      />
    </>
  );
};

export default Avatar;
