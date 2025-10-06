import { useEffect, useState } from "react";
import { TableForm } from "./TableForm";
import { useSendUsers } from "../../hooks/User/SendUsers/useSendUsers";

export const InsertTableUsers = () => {
  const [nome, setNome] = useState("");
  const [user, setUser] = useState({ Email: "", Password: "" });

  function ClickHandler() {
    console.log("Dados registrados" + user.Email, user.Password);
    useSendUsers(user);
  }
  function handleEmailChange(e:any) {
    setUser({
      ...user,
      Email: e.target.value,
    });
  }

  function handlePasswordChange(e:any) {
    setUser({
      ...user,
      Password: e.target.value,
    });
  }

  const fields = [
    {
      placeHolder: "Email",
      type: "Email",
      onChange: handleEmailChange,
      value: user.Email
    },
    {
      placeHolder: "Insira sua senha",
      type: "Password",
      onChange: handlePasswordChange,
      value: user.Password
    },
  ];

  return (
    <>
      <TableForm
        title="Cadastrar Usuarios"
        placeHolder="Insira seu nome"
        fields={fields}
        value={nome}
        onChangeValue={(e) => setNome(e.target.value)}
        ButtonText="Send"
        onClick={ClickHandler}
      ></TableForm>
    </>
  );
};
