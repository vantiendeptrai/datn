function ImgUser() {
  return (
    <>
      {" "}
      <div className="flex justify-between ">
        <div>
          <img
            src={"user.jpg"}
            alt=""
            className="w-[200px] h-[200px] relative bottom-[70px] left-12 rounded-full border-[10px] 
         nam:p-[35px] nam:border-0 nam:ml-[50px] "
          />
        </div>
      </div>
    </>
  );
}

export default ImgUser;
