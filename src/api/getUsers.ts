import axios from "axios";

export type IUser = {
    param: string;
    results: number;
}

export const getUsers = async ({param, results}: IUser) => {
  try {
    const { data } = await axios.get(
      `https://randomuser.me/api/?nat=${param}&results=${results || 8}`
    );

    return Promise.resolve(data.results);
  } catch (error) {
    return Promise.reject(error);
  }
};
