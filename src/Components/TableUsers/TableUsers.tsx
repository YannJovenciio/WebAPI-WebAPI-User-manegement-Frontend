import React, { use } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import type { UserResponse } from "../../test/UserResponse";

interface TableProps {
  Names?: UserResponse[];
  isLoading: boolean;
}

export const TableUsers: React.FC<TableProps> = ({ Names, isLoading }) => {
  const users = Array.isArray(Names) ? Names: [];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Lista de Usuários
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="tabela de usuários">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Nome
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={2} align="center" sx={{ py: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress sx={{ mr: 2 }} />
                    <Typography>Carregando usuários...</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              
              users.map((user, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(even)": { backgroundColor: "action.hover" },
                    "&:hover": { backgroundColor: "action.selected" },
                  }}
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
