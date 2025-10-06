import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import type { ChangeEventHandler } from "react";

interface Field {
  placeHolder?: string;
  type?: string;
  onChange?: ChangeEventHandler;
  value?: string;
}

interface TableProps {
  title?: string;
  placeHolder?: string;
  inputType?: string;
  ButtonText?: string;
  value?: string;
  fields?: Field[];
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => any;
}

export const TableForm: React.FC<TableProps> = ({
  title,
  placeHolder,
  inputType,
  ButtonText,
  value,
  onClick,
  onChangeValue,
  fields,
}) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom></Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="tabela de usuários">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                {title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TableContainer sx={{ display: "flex", gap: "2%" }}>
                  <TextField
                    placeholder={placeHolder}
                    type={inputType}
                    value={value}
                    onChange={onChangeValue}
                  />
                  {fields &&
                    fields.map((f) => (
                      <TextField placeholder={f.placeHolder}
                      type={f.type}
                      value={f.value}
                      onChange={f.onChange}
                      ></TextField>
                    ))}
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={() => onClick && onClick()}
                  >
                    {ButtonText}
                  </Button>
                </TableContainer>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
