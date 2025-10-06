import { useState, type FC } from "react";
import { useDeleteUsers } from "./useDeleteUsers";
import { TableForm } from "../InsertUsers/TableForm";

export const DeleteUser: FC = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
  });
  const {
    mutate: deleteUser,
    isPending,
    isError,
    error,
    ...rest
  } = useDeleteUsers();

  const handleClick = () => {
    deleteUser({
      Name: form.Name,
      Email: form.Email,
    });
  };

  const formFields = [
    {
      placeHolder: "Insira o nome do usuario",
      type: "text",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, Name: e.target.value }),
    },
  ];

  return (
    <>
      <TableForm
        title="Deletar Usuario"
        placeHolder="Insira o email do usuario"
        ButtonText="Send"
        onChangeValue={(e) => setForm({ ...form, Email: e.target.value })}
        fields={formFields}
        onClick={handleClick}
      />
      {rest.isSuccess && <p>Usuário deletado!</p>}
    </>
  );
};
