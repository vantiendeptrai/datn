import { Input } from "../../../components";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center py-10">
        <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto p-6 bg-white rounded-lg shadow-md ">
          <h1 className="text-center text-3xl text-gray-800 font-bold mb-4">Đăng Nhập</h1>
          <p className="text-center text-gray-600 mb-8">Chào mừng bạn trở lại, hãy đăng nhập vào tài khoản của bạn</p>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Tài khoản</label>
              <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" placeholder="Nhập Email của bạn" />
            </div>
            <div>
              <Input id="emaill" label="Email" placeholder="Nhap email cua ban" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Ghi nhớ mật khẩu</label>
            </div>
            <div className="text-blue-500">Quên mật khẩu</div>
          </div>
          <button className="w-full h-10 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Đăng Nhập</button>
          <button className="w-full h-10 mt-4 border border-gray-300 hover:border-gray-400 rounded-md">Đăng nhập bằng Google</button>
          <div className="text-center mt-4">
            <span>Chưa có tài khoản? </span>
            <a className="text-blue-600">Đăng Ký</a>
          </div>
        </div>
        <div className="w-full">
          <img className="hidden md:block w-full h-auto max-h-[500px]" src="/images/banner-auth.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
