import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useProfesseurs } from "../../../../../graphql/responsable/professeurs/professeurs.service";
import { Box, CircularProgress } from "@material-ui/core";

import SearchInput from "../../../../public-component/SearchInput";
import AffectProfesseurTransfer from "./AffectProfesseurTransfer";
import { Classe, Section, Responsable } from "../../../../../graphql/types";
import { useSetEnseigner } from "../../../../../graphql/enseigner/set-enseigner/setEnseigner.service";
import { useMatieres } from "../../../../../graphql/matiere/matieres/matieres.service";

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
  const { professeurs } = useProfesseurs();
  const checkedState = React.useState<number[]>([]);
  const leftState = React.useState<number[]>([]);
  const rightState = React.useState<number[]>([]);
  const { matiereState } = useMatieres();
  const {
    loadingSetEnseigner,
    submitSetEnseigner,
    handleClickOpen,
    handleClose,
    open,
  } = useSetEnseigner({
    setEnseignerInput: {
      matiereId: matiereState.updateMatiereVariables.updateMatiereInput.id,
      classeId: classe.id,
      sectionId: parseInt(section.id),
      professeurs: rightState[0],
    },
  });

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {affected.length}
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
            checkedState={checkedState}
            leftState={leftState}
            rightState={rightState}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={submitSetEnseigner} color="primary">
            {loadingSetEnseigner ? (
              <CircularProgress size={20} />
            ) : (
              "Enregistrer"
            )}
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
