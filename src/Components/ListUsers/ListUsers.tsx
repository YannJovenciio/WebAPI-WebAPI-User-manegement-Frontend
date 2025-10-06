import { TableUsers } from "../TableUsers/TableUsers";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import React from "react";

export const ListUsers: React.FC = () => {
  const [page, setPage] = useState(1);
  const { users, isLoading } = useGetPermissions(page);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <TableUsers Names={users} isLoading={isLoading}></TableUsers>
      <Pagination page={page} onChange={(_, value) => setPage(value)} />
    </>
  );
};
