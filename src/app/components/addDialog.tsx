import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { FilePlus } from "lucide-react";
import MenuItem from "@mui/material/MenuItem";

export function AddPlayerDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <DialogContentText>
            Please fill in player information below!
          </DialogContentText>
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
          />
          <div className="flex mt-5 gap-8">
            <div className="basis-1/2">
              <TextField
                sx={{ minWidth: 200 }}
                select // tell TextField to render select
                label="Gender"
                className="text-start w-full"
                size="small"
              >
                <MenuItem key={1} value="male">
                  Male
                </MenuItem>
                <MenuItem key={2} value="female">
                  Female
                </MenuItem>
              </TextField>
            </div>
            <div className="basis-1/2">
              <TextField
                sx={{ minWidth: 200 }}
                select // tell TextField to render select
                label="Potential"
                className="text-start w-full"
                size="small"
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
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
