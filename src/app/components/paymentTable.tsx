import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export function PlayerPaymentTable() {
  return (
    <TableContainer className="border rounded-md">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Month</TableCell>
            <TableCell align="center">Collector</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row, rindex) => (
            <>
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{rindex + 1}</TableCell>
                <TableCell align="center" padding="checkbox">
                  <SelectLabels />
                </TableCell>
              </TableRow>
            </>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SelectLabels() {
  const [age, setAge] = React.useState("nil");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <TextField
      sx={{ m: 1, minWidth: 120 }}
      value={age}
      onChange={(e) => setAge(e.target.value)}
      select // tell TextField to render select
      label="Name"
      className="text-start"
      size="small"
    >
      <MenuItem key={1} value="nil">
        Not paid
      </MenuItem>
      <MenuItem key={2} value="dung">
        Dũng
      </MenuItem>
      <MenuItem key={3} value="huy">
        Huy
      </MenuItem>
      <MenuItem key={4} value="khanh">
        Khánh
      </MenuItem>
      <MenuItem key={5} value="minh">
        Minh
      </MenuItem>
    </TextField>
  );
}
