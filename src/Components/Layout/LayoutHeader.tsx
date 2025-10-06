import React from "react";
import { Link } from "react-router-dom";
import "./LayoutHeader.css";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutHeader: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="layout">
      <header className="header">
        <h1>{t("title")}</h1>
        <nav>
          <Link to="/">Início</Link> | <Link to="/cadastrar">Cadastrar</Link> |{" "}
          <Link to="/listar">Listar</Link> | <Link to="/deletar">Deletar</Link>
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>© 2025 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
