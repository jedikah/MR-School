import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useProfesseurs } from "../../../../../graphql/responsable/professeurs/professeurs.service";
import { Box } from "@material-ui/core";

import SearchInput from "../../../../public-component/SearchInput";
import AffectProfesseurTransfer from "./AffectProfesseurTransfer";
import { Classe, Section, Responsable } from "../../../../../graphql/types";

export interface AffectProfesseurProps {
  classe: Classe;
  section: Section;
  affected: Responsable[];
}

const AffectProfesseur: React.FC<AffectProfesseurProps> = ({
  classe,
  section,
  affected,
}) => {
  const [open, setOpen] = React.useState(false);
  const { professeurs } = useProfesseurs();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        0
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {`Gerer les professeurs en charge de la classe ${classe.designation} ${section.designation}`}
        </DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <SearchInput input="" onChange={() => {}} />
          </Box>

          <AffectProfesseurTransfer
            professeurs={professeurs}
            affected={affected}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Enregistrer
          </Button>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AffectProfesseur;
