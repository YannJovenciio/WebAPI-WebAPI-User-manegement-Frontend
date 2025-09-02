import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { UserResponse } from "./UserResponse";

const api = axios.create({
  baseURL: "http://localhost:5267",
  timeout: 10000, // 10 segundos
});

const fetchUsers = async (): Promise<UserResponse[]> => {
  console.log("Buscando usuários de:", "http://localhost:5267/User");
  const response = await api.get("/User");
  console.log("Dados recebidos:", response.data);
  return response.data.data as UserResponse[];
};

export const useGetPermissions = () => {
  const { data, isLoading, isError, error, refetch } = useQuery<
    UserResponse[],
    Error
  >({
    queryKey: ["users"],
    queryFn: fetchUsers,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error, refetch };
};
