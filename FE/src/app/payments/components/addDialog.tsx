import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { FilePlus } from "lucide-react";
import MenuItem from "@mui/material/MenuItem";
import { FormState, Gender, PlayerType } from "../../../types/interface";

export function AddPlayerDialog() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [valid, setValid] = React.useState<FormState>("unfilled");

  const [name, setName] = React.useState<string>("");
  const [gender, setGender] = React.useState<Gender>("M");
  const [potential, setPotential] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async (playerInfo: PlayerType) => {
    fetch("http://localhost:8080/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerInfo),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Nice");
        } else console.log("Bad!!");
      })
      .catch((e) => console.error(e));
  };

  React.useEffect(() => {
    setValid(name.length > 0 ? "filled" : "unfilled");
  }, [name]);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        className="ml-auto"
        aria-label="delete"
        onClick={handleClickOpen}
      >
        <FilePlus className="w-4 h-4 mr-2" />
        Add
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          <span className="font-bold capitalize">add player</span>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Full name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex mt-6 gap-8">
            <div className="basis-1/2">
              <TextField
                sx={{ minWidth: 200 }}
                select // tell TextField to render select
                label="Gender"
                className="text-start w-full"
                size="small"
                required
                value={gender}
                onChange={() => setGender((prev) => (prev === "M" ? "F" : "M"))}
              >
                <MenuItem key={1} value="M">
                  Male
                </MenuItem>
                <MenuItem key={2} value="F">
                  Female
                </MenuItem>
              </TextField>
            </div>
            <div className="basis-1/2">
              <TextField
                required
                sx={{ minWidth: 200 }}
                select // tell TextField to render select
                label="Potential"
                className="text-start w-full"
                size="small"
                value={potential ? "yes" : "no"}
                onChange={() => setPotential((prev) => !prev)}
              >
                <MenuItem key={1} value="yes">
                  Yes
                </MenuItem>
                <MenuItem key={2} value="no">
                  No
                </MenuItem>
              </TextField>
            </div>
          </div>

          <p className="text-red-600 text-sm mt-5">
            {valid === "unfilled"
              ? "Do not leave any field empty!"
              : valid === "dup_name"
              ? "Name already registered!"
              : ""}
          </p>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAdd({
                name,
                gender,
                potential,
              });
              handleClose();
            }}
            disabled={!valid}
            autoFocus
            type="submit"
            className="flex items-center gap-1"
          >
            Add
            <CircularProgress size={11} thickness={6} className="mb-[1px]" />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
