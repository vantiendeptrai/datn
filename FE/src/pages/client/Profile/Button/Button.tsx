function Button() {
  return (
    <div className={"flex justify-between"}>
      <div>
        <h2 className="ml-[40px] text-base font-semibold mb-[20px] ">
          Thông tin chi tiết
        </h2>
      </div>

      <div className="nam:mb-[20px] mr-[12px] top-[440px] right-9 max-w-lg nam:absolute nam: nam:bottom-[200px]">
        <button className="max-w-lg mr-[10px] p-[10px] rounded-[8px] bg-[#fff] font-black border-2 dark:text-black">
          Hủy
        </button>
        <button className="text-white bg-[#475BE8] max-w-lg p-[10px] mr-[30px] mt-[20px] rounded-[8px]">
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Button;
