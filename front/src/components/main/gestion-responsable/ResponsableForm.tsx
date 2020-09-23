import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Avatar,
  Box,
  TextField,
  Divider,
  Button,
  CircularProgress,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import RoleIcon from '../../../assets/role.png';
import UtilisateurFields from './UtilisateurFields';
import { CreateResponsableInput } from '../../../graphql/types';
import { HandleChangeCreateResponsable } from '../../../graphql/responsable/responsable.action';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },

  eleveAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: 10
  },

  section: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },

  submitBtn: {
    borderRadius: '50px 50px 50px 50px',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10
  },

  circularProgress: {
    color: '#fff',
    marginLeft: 15
  },

  marginBottom: {
    marginBottom: 8
  }
}));

export interface ResponsableFormProps {
  value: CreateResponsableInput;
  loading: boolean;
  title: string;
  submitBtnLabel: string;
  error: boolean;
  onChange: (options: Omit<HandleChangeCreateResponsable, 'type'>) => void;
  onSubmit: () => void;
}

export const ResponsableForm: React.FC<ResponsableFormProps> = ({
  value,
  loading,
  title,
  submitBtnLabel,
  error,
  onChange,
  onSubmit
}) => {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <Paper style={{ padding: 5 }} elevation={4}>
        <Typography
          variant="h6"
          style={{ marginLeft: 10, textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ marginTop: 25 }}
        >
          <div style={{ position: 'relative' }}>
            <Avatar alt="responsable profile" className={classes.eleveAvatar} />
            {value.utilisateur.photo === '' && (
              <IconButton
                aria-label="edit photo eleve"
                style={{ position: 'absolute', left: -20, bottom: 0 }}
              >
                <EditIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        </Box>

        <div className={classes.section}>
          <UtilisateurFields value={value} onChange={onChange} />

          <Box
            display="flex"
            alignItems="center"
            style={{ paddingTop: 20, paddingBottom: 10 }}
          >
            <Avatar variant="square" src={RoleIcon} alt="student" />
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Fonction
            </Typography>
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              // error={isFonctionFormError('designation')}
              onChange={(e) =>
                onChange({
                  key1: 'fonction',
                  key2: 'designation',
                  value: e.target.value
                })
              }
              value={value.fonction.designation}
              size="small"
              variant="outlined"
              placeholder="Déscription *"
              fullWidth
            />
          </Box>
        </div>

        <Divider style={{ marginTop: 5, marginBottom: 5 }} />

        <Box display="flex" justifyContent="flex-end">
          <Button
            disableFocusRipple={true}
            variant="contained"
            color="primary"
            size="small"
            className={classes.submitBtn}
            onClick={onSubmit}
          >
            {submitBtnLabel}
            {loading && (
              <CircularProgress
                size={20}
                className={classes.circularProgress}
              />
            )}
          </Button>
        </Box>
      </Paper>
    </form>
  );
};
