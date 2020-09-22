import React from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

export interface ConfirmationDialogProps {
  classes: Record<"paper", string>;
  id: string;
  keepMounted: boolean;
  open: boolean;
  message: string;
  onCancel: () => void;
  onOk: () => void;
}

export default function ConfirmationDialog(props: ConfirmationDialogProps) {
  const { open, message, onCancel, onOk, ...other } = props;

  const handleCancel = () => {
    onCancel();
  };

  const handleOk = () => {
    onOk();
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Confirmation</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Annuler
        </Button>
        <Button onClick={handleOk} color="primary">
          Valider
        </Button>
      </DialogActions>
    </Dialog>
  );
}
