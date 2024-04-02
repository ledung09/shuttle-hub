import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircleCheckBig } from "lucide-react";
import { Gender } from "../../../types/interface";
import { DeleteDialog, EditInfoDialog } from "./subDialog";

function createData(
  id: number,
  name: string,
  gender: Gender,
  potential: boolean,
  monthRecord: boolean[]
) {
  return { id, name, gender, potential, monthRecord };
}

const rows = [
  createData(1, "Frozen yoghurt", "M", true, []),
  createData(2, "Ice cream sandwich", "F", false, []),
  createData(3, "Eclair", "M", true, []),
  createData(3, "Eclair", "M", true, []),
  createData(4, "Cupcake", "F", false, []),
  createData(5, "Gingerbread", "M", false, []),
  createData(6, "Frozen yoghurt", "M", true, []),
  createData(7, "Ice cream sandwich", "F", false, []),
  createData(8, "Eclair", "M", true, []),
  createData(9, "Eclair", "M", true, []),
  createData(10, "Cupcake", "F", false, []),
  createData(11, "Gingerbread", "M", false, []),
];

export function UserTable() {
  return (
    <TableContainer className="">
      <Table>
        <TableHead>
          {/* <TableRow>
              <TableCell align="center" colSpan={2}></TableCell>
              <TableCell align="center" colSpan={13}>
                Month
              </TableCell>
            </TableRow> */}
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Potential</TableCell>

            {Array(12)
              .fill(0)
              .map((item, index) => (
                <TableCell align="center">{index + 1}</TableCell>
              ))}
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rindex) => (
            <>
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell padding="checkbox" align="center">
                  {row.gender}
                </TableCell>
                <TableCell align="center">
                  {row.potential ? "Yes" : "No"}
                </TableCell>
                {Array(12)
                  .fill(0)
                  .map((item, index) => (
                    <TableCell align="center" padding="checkbox">
                      {/* <Checkbox
                          size="small"
                          checked
                          className="pointer-events-none"
                        /> */}
                      <CircleCheckBig className="w-4 h-4 mx-auto text-pending" />
                    </TableCell>
                  ))}
                <TableCell padding="checkbox" align="center">
                  <EditInfoDialog />
                </TableCell>
                <TableCell padding="checkbox" align="center">
                  <DeleteDialog />
                </TableCell>
              </TableRow>
              {rindex === rows.length - 1 && (
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    <span className="font-medium">Paid count per month</span>
                  </TableCell>
                  {Array(12)
                    .fill(0)
                    .map((item, index) => (
                      <TableCell align="center" padding="checkbox">
                        <span className="font-medium">0</span>
                      </TableCell>
                    ))}
                  <TableCell align="center" colSpan={2}></TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
