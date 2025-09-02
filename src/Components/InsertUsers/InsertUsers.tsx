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

interface TableProps {
  title?: string;
  firstPlaceHolder?: string;
  secondPlaceHolder?: string;
  extraField?: boolean;
  inputType: string;
}

export const InsertUsers: React.FC<TableProps> = ({
  firstPlaceHolder = "Insert your name",
  title,
  secondPlaceHolder = "password",
  extraField = "Insert your password",
  inputType: Type,
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
                    placeholder={firstPlaceHolder}
                    type={Type}
                  ></TextField>
                  {extraField ? (
                    <>
                      <TextField placeholder={secondPlaceHolder} type={Type}></TextField>
                    </>
                  ) : (
                    ""
                  )}
                  <Button variant="contained" endIcon={<SendIcon/>}>
                    Send
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
