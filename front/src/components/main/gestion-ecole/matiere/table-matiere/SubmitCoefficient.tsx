import * as React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

import GlobalLoading from "../../../../public-component/GlobalLoading";
import { useMatieres } from "../../../../../graphql/matiere/matieres/matieres.service";
import { useSetCoefficient } from "../../../../../graphql/coefficient/set-coefficients/setCoefficients.service";

const SubmitCoefficient: React.FC = () => {
  const { matiereState, matieresData } = useMatieres();
  const {
    coefficientState,
    submitSetCoefficients,
    loadingSetCoefficients,
  } = useSetCoefficient();

  const disabled = () => {
    if (
      matiereState.tableMatiere !== "coefficient" ||
      !matieresData ||
      !matiereState.updateMatiereVariables.updateMatiereInput.id
    ) {
      return true;
    }

    const associatedClasses = matieresData.matieres[
      matieresData.matieres
        .map((m) => m.id)
        .indexOf(
          String(matiereState.updateMatiereVariables.updateMatiereInput.id)
        )
    ].coefficientTable
      .filter((coe) => coe.status === true)
      .map((coe) => coe.classe.id);

    if (
      JSON.stringify(associatedClasses) ===
      JSON.stringify(coefficientState.coefficientSelectedClasses)
    ) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <IconButton
        disabled={disabled()}
        aria-label="delete"
        onClick={submitSetCoefficients}
      >
        <Tooltip title="Enregistrer">
          <SaveAltIcon />
        </Tooltip>
      </IconButton>

      <GlobalLoading open={loadingSetCoefficients} />
    </div>
  );
};

export default SubmitCoefficient;
