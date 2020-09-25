import React from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { Typography, Box } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

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
      <DialogTitle id="confirmation-dialog-title">
        <Box display="flex" alignItems="center">
          {" "}
          <WarningIcon color="error" style={{ marginRight: 5 }} /> Confirmation
        </Box>
      </DialogTitle>
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
