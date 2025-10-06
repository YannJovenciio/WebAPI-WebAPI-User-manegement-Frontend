import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { UserResponse } from "../UserResponse";

const api = axios.create({
  baseURL: "http://localhost:5267/User",
  timeout: 10000, // 10 segundos
});

const fetchUsers = async ({ queryKey }: { queryKey: [string, number] }) => {
  const [, page] = queryKey;
  const response = await api.get(`/GetUser?Page=${page}`);
  return response.data.data as UserResponse[];
};

export const useGetPermissions = (page: number) => {
  const { data, isLoading, isError, error, refetch } = useQuery<UserResponse[], Error>({
    queryKey: ["users", page],
    queryFn: fetchUsers,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return { users: data, isLoading, isError, error, refetch };
};
