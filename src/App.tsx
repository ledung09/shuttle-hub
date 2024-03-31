import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Checkbox, IconButton, TableFooter } from "@mui/material";
import { Gender } from "./types/interface";
import { PenLine } from "lucide-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function createData(
  id: number,
  name: string,
  gender: Gender,
  monthRecord: boolean[]
) {
  return { id, name, gender, monthRecord };
}

const rows = [
  createData(1, "Frozen yoghurt", "M", []),
  createData(2, "Ice cream sandwich", "F", []),
  createData(3, "Eclair", "M", []),
  createData(4, "Cupcake", "F", []),
  createData(5, "Gingerbread", "M", []),
];

export default function App() {
  return (
    <>
      <UserTable />
    </>
  );
}

function UserTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}></TableCell>
              <TableCell align="center" colSpan={13}>
                Month
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              {Array(12)
                .fill(0)
                .map((item, index) => (
                  <TableCell align="center">{index + 1}</TableCell>
                ))}
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rindex) => (
              <>
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  {Array(12)
                    .fill(0)
                    .map((item, index) => (
                      <TableCell align="center" padding="checkbox">
                        <Checkbox checked className="pointer-events-none" />
                      </TableCell>
                    ))}
                  <TableCell align="center">
                    <AlertDialog />
                  </TableCell>
                </TableRow>
                {rindex === rows.length - 1 && (
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      <span className="font-medium">Total players paid</span>
                    </TableCell>
                    {Array(12)
                      .fill(0)
                      .map((item, index) => (
                        <TableCell align="center" padding="checkbox">
                          <span className="font-medium">0</span>
                        </TableCell>
                      ))}
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function SummaryRow() {
  return (
    <TableRow>
      <TableCell align="center" colSpan={2}></TableCell>
      <TableCell align="center" colSpan={13}>
        Month
      </TableCell>
    </TableRow>
  );
}

function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <PenLine className="w-4 h-4 m-auto cursor-pointer p-0" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span className="font-bold capitalize">edit payment information</span>
        </DialogTitle>
        <DialogContent>
          <div className="flex-col">
            <p>
              Player name: <span className="font-medium">Đinh Lê Dũng</span>
            </p>
            <p>
              Player gender: <span className="font-medium">M</span>
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <PlayerPaymentTable />
            <PlayerPaymentTable />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function PlayerPaymentTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Collector</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rindex) => (
            <>
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Month</TableCell>
                <TableCell padding="checkbox">
                  <SelectLabels />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
