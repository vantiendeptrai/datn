import { Input } from "../../../../components";
import App from "../File/Upload";
import { FieldValues, useForm } from "react-hook-form";

export default function Form() {
  const imgBanner = (
    <img
      src={"../../../../../public/Banner.png"}
      alt="Avatar"
      className="w-full relative "
    />
  );

  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  return (
    <section className=" max-w-full dark:bg-[#1A1D1F] bg-[#FCFCFC] pb-[10px]  ">
      {imgBanner}

      <div className="flex justify-between relative">
        <div>
          <img
            src={"user.jpg"}
            alt=""
            className="w-[200px] h-[200px] relative bottom-[70px] left-12 rounded-full border-[10px] 
             nam:p-[35px] nam:border-0 nam:ml-[50px] "
          />
        </div>
      </div>

      {/* [] */}
      <div className={"flex justify-between"}>
        <div>
          <h2 className="ml-[50px] text-base font-semibold mb-[20px] ">
            Thông tin chi tiết
          </h2>
        </div>

        <div className="nam:mb-[20px] top-[440px] right-9 max-w-lg">
          <button className="max-w-lg mr-[20px] p-[10px] rounded-[8px] bg-[#fff] font-black border-2 dark:text-black">
            Hủy
          </button>
          <button className="text-white bg-[#475BE8] max-w-lg p-[10px] mr-[30px] mt-[20px] rounded-[8px]">
            Cập nhật
          </button>
        </div>
      </div>

      <form action="" className="px-10">
        <div className="grid grid-cols-2 gap-5 nam:grid-flow-row nam: row-span-3 nam:grid-cols-[1fr 1fr] nam:flex flex-col">
          <Input
            id="name"
            label="Tên người dùng"
            placeholder="Tên Người dùng"
            type="text"
            register={register}
            errors={errors}
            required
          />

          <Input
            id="phone"
            label="phone"
            placeholder="012345678"
            type="number"
            register={register}
            errors={errors}
            required
          />

          <Input
            id="birthday"
            label="Ngày sinh"
            placeholder="01/01/2003"
            type="number"
            register={register}
            errors={errors}
            required
          />

          <Input
            id="email"
            label="Email"
            placeholder="luong@gmail.com"
            type="email"
            register={register}
            errors={errors}
            required
          />
        </div>

        <section className="grid grid-cols-2 gap-5 mt-5 mb-[20px] nam:flex flex-col">
          <div className="">
            <label className="w-full">Giới tính</label>
            <select
              name=""
              id=""
              className="w-full  rounded-xl outline-none border-divideLight dark:border-divideDark px-4 py-3 first-letter
              border-2
              disabled:opacity-70
              disabled:cursor-not-allowed
              bg-light
              dark:bg-dark
              text-textLight2nd
              dark:text-textDark2nd
              "
            >
              <option className=" dark:text-black outline-none" value="0">
                Chưa chọn
              </option>
              <option className=" dark:text-black" value="1">
                Nam
              </option>
              <option className=" dark:text-black" value="2">
                Nữ
              </option>
            </select>
          </div>

          <Input
            id="address"
            label="Địa chỉ"
            placeholder="Hà nội"
            type="text"
            register={register}
            errors={errors}
            required
          />
        </section>

        <App />
      </form>
    </section>
  );
}
