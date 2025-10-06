import axios from "axios";
import type { UserResponse } from "../User/UserResponse";

export const apis = () => {
  const api = axios.create({
    baseURL: "http://localhost:5267",
    timeout: 10000, // 10 segundos
  });

  const API_URLS = {
    ["GetUser"]: "localhost",
  };

  const fetchUsers = async (): Promise<UserResponse[]> => {
    console.log("Buscando usuários de:", "http://localhost:5267/User");
    const response = await api.get("/User");
    console.log("Dados recebidos:", response.data);
    return response.data.data as UserResponse[];
  };
};
