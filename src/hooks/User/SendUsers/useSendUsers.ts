import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useSendUsers = async (User: any) => {
  try {
    await axios.post("http://localhost:5267/User/AddUser", {
      Name: User.Name,
      Email: User.Email,
      Password: User.Password,
    }
  );
    alert("Usuario cadastrado!");
  } catch (error) {
    alert("Usuario não cadastrado!");
    console.log(error);
  }
  const queryClient = new QueryClient();
  queryClient.invalidateQueries({
    queryKey: ["users"],
  });
};

// async function clickHandler() {
//   try {
//     await axios.post("http://localhost:5267/User", {
//       Name: form.Name,
//       Email: form.Email,
//       Password: form.Password,
//     });
//     alert("Usuário cadastrado!");
//   } catch (err) {
//     alert("Erro ao cadastrar usuário!");
//   }
// }
