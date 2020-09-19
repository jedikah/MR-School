import * as React from "react";

import { UtilisateurInput } from "../../../graphql/types";
import { Box, TextField } from "@material-ui/core";

type UtilisateurFields = Omit<UtilisateurInput, "photo" | "motDePasse">;
type UtilisateurFieldsKeys = keyof UtilisateurFields;
export interface UtilisateurFieldsProps {
  utilisateurFields: UtilisateurFields;
  onChange: (key: UtilisateurFieldsKeys, value: string) => void;
  error: boolean;
}

const UtilisateurFields: React.FC<UtilisateurFieldsProps> = React.memo(
  ({ utilisateurFields, onChange, error }) => {
    const isError = (key: UtilisateurFieldsKeys) => {
      return error && utilisateurFields[key] === "";
    };

    return (
      <Box>
        <Box display="flex" style={{ marginBottom: 8 }}>
          <TextField
            error={isError("nom")}
            onChange={(e) => onChange("nom", e.target.value)}
            value={utilisateurFields.nom}
            size="small"
            variant="outlined"
            placeholder="nom *"
            fullWidth
          />
        </Box>

        <Box display="flex" style={{ marginBottom: 8 }}>
          <TextField
            error={isError("prenom")}
            onChange={(e) => onChange("prenom", e.target.value)}
            value={utilisateurFields.prenom}
            size="small"
            variant="outlined"
            placeholder="prenom *"
            fullWidth
          />
        </Box>

        <Box display="flex" style={{ marginBottom: 8 }}>
          <TextField
            error={isError("contact")}
            onChange={(e) => onChange("contact", e.target.value)}
            value={utilisateurFields.contact}
            size="small"
            variant="outlined"
            placeholder="contacte *"
            fullWidth
            style={{ marginRight: 5 }}
          />
          <TextField
            error={isError("adresse")}
            size="small"
            onChange={(e) => onChange("adresse", e.target.value)}
            value={utilisateurFields.adresse}
            variant="outlined"
            placeholder="adresse *"
            fullWidth
          />
        </Box>
      </Box>
    );
  }
);

export default UtilisateurFields;
