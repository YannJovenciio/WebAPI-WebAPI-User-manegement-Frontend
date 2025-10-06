import { QueryClient, useMutation} from "@tanstack/react-query";
import axios from "axios";



const api = axios.create({
  baseURL: "http://localhost:5267/User/DeleteUser",
  timeout: 10000, // 10 segundos
});

interface DeleteUserParams {
  Name: string;
  Email: string;
}

const queryClient = new QueryClient();
const deleteUser = async ({ Name, Email }: DeleteUserParams) => {
  const response = await api.delete("", { data: { Name, Email } });
  return response.data;
};

export const useDeleteUsers = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
