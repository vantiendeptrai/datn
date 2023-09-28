import { InfoUser } from "../../../components";

const ProfilePage = () => {
  return (
    <>
      <div className="rounded-xl bg-light dark:bg-dark p-3 w-full">
        <div className="border-b p-1 border-divideLight dark:border-divideDark">
          <div className="flex items-center gap-10">
            <div>
              <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
                Thông tin cá nhân
              </h2>
              <p className="text-base mt-3 text-textLight2nd dark:text-textDark2nd">
                Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử
                dụng ra sao
              </p>
            </div>
          </div>
        </div>

        <InfoUser />
      </div>
    </>
  );
};

export default ProfilePage;
