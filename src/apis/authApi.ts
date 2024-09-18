import { appInfos } from "../constants/appInfos";
import axiosClient from "./axiosClient";

class AuthAPI {
  HandleAuth = async (
    url: string,
    data?: any,
    method?: "GET" | "POST" | "PUT" | "DELETE"
  ) => {
    return await axiosClient(`${appInfos.BASE_URL}/auth/${url}`, {
      method: method ?? "GET",
      data,
    });
  };
}

export default new AuthAPI();
