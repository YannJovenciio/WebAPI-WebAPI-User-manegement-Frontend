import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n/i18n";


// 1. Criar o cliente do React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Número de tentativas em caso de erro
      staleTime: 5 * 60 * 1000, // Tempo que os dados ficam "frescos" (5 min)
      refetchOnWindowFocus: false, // Não recarregar quando mudar de janela
    },
  },
});

// 2. Envolver sua aplicação com os Providers
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
