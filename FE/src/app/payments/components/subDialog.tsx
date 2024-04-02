import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, IconButton } from "@mui/material";
import { PenLine, X } from "lucide-react";
import { PlayerPaymentTable } from "./paymentTable";

export function EditInfoDialog() {
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
        <PenLine className="w-4 h-4 m-auto cursor-pointer p-0 text-slate-800" />
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
          <div className="flex-col gap-1">
            <p>
              Name: <span className="font-medium">Đinh Lê Dũng</span>
            </p>
            <p>
              Gender: <span className="font-medium">M</span>
            </p>
            <p>
              Potential: <span className="font-medium">Yes</span>
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

export function DeleteDialog() {
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
        <X className="w-4 h-4 text-red-600 m-auto cursor-pointer p-0" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          <span className="font-bold capitalize">delete player</span>
        </DialogTitle>
        <DialogContent>
          <p className=" mb-2">
            Do you wish to <span className="text-wrong">delete</span> this
            player?
          </p>
          <div className="flex-col gap-1">
            <p>
              Name: <span className="font-medium">Đinh Lê Dũng</span>
            </p>
            <p>
              Gender: <span className="font-medium">M</span>
            </p>
            <p>
              Potential: <span className="font-medium">Yes</span>
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="error" onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
