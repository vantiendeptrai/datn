import { instance } from ".";

export const getCurrentUser = async () => {
  try {
    const { data } = await instance.get("/auth/get-user");

    return data.user;
  } catch (error) {
    return null;
  }
};
