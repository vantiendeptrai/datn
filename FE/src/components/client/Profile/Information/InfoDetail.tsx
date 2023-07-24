import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

import { Button, Container, InfoUpload, Input } from "../../..";

type InfoDetailProps = {
  handleSubmit: () => void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const InfoDetail = ({ handleSubmit, register, errors }: InfoDetailProps) => {
  return (
    <>
      <Container>
        <span
          className="
          text-xl
          font-medium
          text-textLight
          dark:text-textDark"
        >
          Thông tin chi chi tiết
        </span>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            mx-5
            md:mx-0
            mt-5"
        >
          <Input
            id="name"
            label="Tên người dùng"
            placeholder="Trần Văn Lương"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="phone"
            label="Số điện thoại"
            placeholder="0367370371"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="email"
            label="Email"
            placeholder="tranluong460@gmail.com"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="address"
            label="Địa chỉ"
            placeholder="Bắc Giang"
            register={register}
            errors={errors}
            required
          />

          <div
            className="
            md:col-span-2"
          >
            <InfoUpload />
          </div>

          <div
            className="
            block
            md:hidden
            p-3"
          >
            <div
              className="
              flex
              justify-end
              gap-3"
            >
              <Button label="Hủy" onClick={() => alert("Sửa")} small outline />
              <Button label="Cập nhật" onClick={handleSubmit} small />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InfoDetail;
