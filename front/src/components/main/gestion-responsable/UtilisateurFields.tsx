import * as React from 'react';

import {
  CreateResponsableInput,
  UtilisateurInput
} from '../../../graphql/types';
import { Box, TextField } from '@material-ui/core';
import { HandleChangeCreateResponsable } from '../../../graphql/responsable/responsable.action';

type UtilisateurFields = Omit<UtilisateurInput, 'photo' | 'motDePasse'>;
type UtilisateurFieldsKeys = keyof UtilisateurFields;

export interface UtilisateurFieldsProps {
  value: CreateResponsableInput;
  onChange: (options: Omit<HandleChangeCreateResponsable, 'type'>) => void;
  // error: boolean;
}

const UtilisateurFields: React.FC<UtilisateurFieldsProps> = React.memo(
  ({ value, onChange }) => {
    return (
      <Box>
        <Box display="flex" style={{ marginBottom: 8 }}>
          <TextField
            // error={isError('nom')}
            onChange={(e) =>
              onChange({
                key1: 'utilisateur',
                key2: 'nom',
                value: e.target.value
              })
            }
            value={value.utilisateur.nom}
            size="small"
            variant="outlined"
            placeholder="nom *"
            fullWidth
          />
        </Box>

        <Box display="flex" style={{ marginBottom: 8 }}>
          <TextField
            // error={isError('prenom')}
            onChange={(e) =>
              onChange({
                key1: 'utilisateur',
                key2: 'prenom',
                value: e.target.value
              })
            }
            value={value.utilisateur.prenom}
            size="small"
            variant="outlined"
            placeholder="prenom *"
            fullWidth
          />
        </Box>

        <Box display="flex" style={{ marginBottom: 8 }}>
          <TextField
            // error={isError('contact')}
            onChange={(e) =>
              onChange({
                key1: 'utilisateur',
                key2: 'contact',
                value: e.target.value
              })
            }
            value={value.utilisateur.contact}
            size="small"
            variant="outlined"
            placeholder="contacte *"
            fullWidth
            style={{ marginRight: 5 }}
          />
          <TextField
            // error={isError('adresse')}
            size="small"
            onChange={(e) =>
              onChange({
                key1: 'utilisateur',
                key2: 'adresse',
                value: e.target.value
              })
            }
            value={value.utilisateur.adresse}
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
