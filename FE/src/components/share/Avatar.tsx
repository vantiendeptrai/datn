type AvatarProps = {
  imageUser: string | undefined;
  large?: boolean;
};

const Avatar = ({ imageUser, large }: AvatarProps) => {
  return (
    <>
      <img
        width={large ? 130 : 50}
        height={large ? 130 : 50}
        alt="Avatar"
        src={imageUser || "/user.jpg"}
        className="
        rounded-full
        p-2
        bg-light
        dark:bg-dark"
      />
    </>
  );
};

export default Avatar;
