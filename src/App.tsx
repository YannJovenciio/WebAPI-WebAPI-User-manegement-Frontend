import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DeleteUser } from "./Components/DeleteUser/DeleteUser";
import { LayoutHeader } from "./Components/Layout/LayoutHeader";
import { useTranslation } from "react-i18next";
import { ListUsers } from "./Components/ListUsers/ListUsers";
import { TableUsers } from "./Components/TableUsers/TableUsers";
import { InsertTableUsers } from "./Components/InsertUsers/InsertTableUsers";

function App() {
  const { t } = useTranslation();
  function Home() {
    return <h2>{t("footer.value")}</h2>;
  }
  return (
    <>
      <LayoutHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deletar" element={<DeleteUser />} />
          <Route path="/listar" element={<ListUsers />} />
          <Route path="/cadastrar" element={<InsertTableUsers />} />
        </Routes>
      </LayoutHeader>
    </>
  );
}

export default App;
