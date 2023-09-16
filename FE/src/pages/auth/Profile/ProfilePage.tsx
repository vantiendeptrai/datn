import Header from "./Header";

const ProfilePage = () => {
  return (
    <div>
      <Header />

      {/* //[] */}
      <div className="mt-2 max-w-[1440px] mx-auto flex gap-10">
        <div className=" w-[300px]">
          <div className="flex border-2 p-3">
            <img
              src="../../../../public/user.jpg"
              alt=""
              className="max-w-[36px] rounded-full"
            />
            <p className="leading-[30px] pl-2">Thông tin cá nhân</p>
          </div>
          <div className="flex border-2 p-3 border-t-0">
            <img
              src="../../../../public/user.jpg"
              alt=""
              className="max-w-[36px] rounded-full"
            />
            <p className="leading-[30px] pl-2">an toàn và bảo mật</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[32px] font-bold">Thông tin cá nhân</h1>
              <p>
                Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử
                dụng ra sao
              </p>
            </div>

            <div>
              <img
                src="../../../../public/user.jpg"
                alt=""
                className="max-w-[60px] rounded-full mt-4 ml-20"
              />
            </div>
          </div>

          <div>
            <div className=" border-y-2 py-4  text-[#006ce4] text-[14px] items-start flex flex-row-reverse text-left font-[BlinkMacSystemFont] px-4">
              <div>
                <button className=" bg-slate-300-500 p-2 rounded-[5px] font-bold hover:bg-slate-400">
                  Chỉnh sửa
                </button>
              </div>

              <div className="w-[502px] h-[20px]">
                <p>Đức Nam Nguyễn</p>
              </div>

              <div className="w-[146px] h-[24px]">
                <p>Tên</p>
              </div>
            </div>
            <div className=" border-y-2 py-4  text-[#006ce4] text-[14px] items-start flex flex-row-reverse text-left font-[BlinkMacSystemFont] px-4 border-t-0">
              <div>
                <button className=" bg-slate-300-500 p-2 rounded-[5px] font-bold hover:bg-slate-400">
                  Chỉnh sửa
                </button>
              </div>

              <div className="w-[502px] h-[20px]">
                <p>chọn tên hiển thị</p>
              </div>

              <div className="w-[146px] h-[24px]">
                <p>Tên hiển thị</p>
              </div>
            </div>
            <div className=" border-y-2 py-4  text-[#006ce4] text-[14px] items-start flex flex-row-reverse text-left font-[BlinkMacSystemFont] px-4 border-t-0">
              <div>
                <button className=" bg-slate-300-500 p-2 rounded-[5px] font-bold hover:bg-slate-400">
                  Chỉnh sửa
                </button>
              </div>

              <div className="w-[502px] h-[20px]">
                <p>Địa chỉ email</p>
              </div>

              <div className="w-[146px] h-[24px]">
                <p>asd@gmail.com</p>
              </div>
            </div>
            <div className=" border-y-2 py-4  text-[#006ce4] text-[14px] items-start flex flex-row-reverse text-left font-[BlinkMacSystemFont] px-4 border-t-0">
              <div>
                <button className=" bg-slate-300-500 p-2 rounded-[5px] font-bold hover:bg-slate-400">
                  Chỉnh sửa
                </button>
              </div>

              <div className="w-[502px] h-[20px]">
                <p>0123456789</p>
              </div>

              <div className="w-[146px] h-[24px]">
                <p>Số điện thoại</p>
              </div>
            </div>
            <div className=" border-y-2 py-4  text-[#006ce4] text-[14px] items-start flex flex-row-reverse text-left font-[BlinkMacSystemFont] px-4 border-t-0">
              <div>
                <button className=" bg-slate-300-500 p-2 rounded-[5px] font-bold hover:bg-slate-400">
                  Chỉnh sửa
                </button>
              </div>

              <div className="w-[502px] h-[20px]">
                <p>Nhập ngày sinh của bạn</p>
              </div>

              <div className="w-[146px] h-[24px]">
                <p>Ngày sinh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
