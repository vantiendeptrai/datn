import { Avatar, Button } from "../../..";

type InformationProps = {
  imageUser: string;
  handleSubmit: () => void;
};

const Information = ({ imageUser, handleSubmit }: InformationProps) => {
  return (
    <>
      <div>
        <img src="/images/profile/banner.png" alt="Banner" className="w-full" />

        <div
          className="
        flex
        justify-between
        p-35
        h-24"
        >
          <div
            className="
          relative
          -top-[4rem]
          left-[3rem]"
          >
            <Avatar imageUser={imageUser} large />
          </div>

          <div
            className="
          hidden
          md:block
          p-3"
          >
            <Button
              label="Hủy"
              onClick={() => alert("Sửa")}
              outline
              small
              className="mr-2"
            />
            <Button label="Cập nhật" onClick={handleSubmit} small />
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
