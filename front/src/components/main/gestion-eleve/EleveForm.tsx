import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Avatar,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import EditIcon from "@material-ui/icons/Edit";

import studentIcon from "../../../assets/student.png";
import parentIcon from "../../../assets/001-family.png";
import { UseCreatEleve } from "../../../graphql/eleve/create-eleve/create-user.service";
import {
  EleveInputKey,
  ParentInputKey,
} from "../../../graphql/eleve/create-eleve/createEleveForm";
import { dateToString, stringToDate } from "../../../utils/dateUtils";
import UtilisateurFields, { UtilisateurFieldsProps } from "./UtilisateurFields";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },

  eleveAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: 10,
  },

  section: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  submitBtn: {
    borderRadius: "50px 50px 50px 50px",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
  },

  circularProgress: {
    color: "#fff",
    marginLeft: 15,
  },

  marginBottom: {
    marginBottom: 8,
  },
}));

export const EleveForm: React.FC<UseCreatEleve> = ({
  submitEleve,
  creatEleveInput,
  eleveLoading,
  handleChangeCreatEleveForm,
  createEleveFormError,
}) => {
  const classes = useStyles();

  const isEleveFormError = (key: EleveInputKey) => {
    return createEleveFormError && creatEleveInput.eleve[key] === "";
  };

  const isParentFormError = (key: ParentInputKey) => {
    return createEleveFormError && creatEleveInput.parent[key] === "";
  };

  const naissance = () => {
    const actualDate = new Date();
    if (dateToString(actualDate) === creatEleveInput.eleve.naissance) {
      return new Date();
    }
    return stringToDate(creatEleveInput.eleve.naissance);
  };

  const utilisateurFieldsPropsOnChange: (
    key: "adresse" | "contact" | "nom" | "prenom",
    value: string
  ) => void = React.useCallback((key, value) => {
    handleChangeCreatEleveForm("utilisateur", key, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const UTILISATEUR_FIELDS_PROPS: UtilisateurFieldsProps = {
    utilisateurFields: creatEleveInput.utilisateur,
    error: createEleveFormError,
    onChange: utilisateurFieldsPropsOnChange,
  };

  return (
    <form className={classes.container}>
      <Paper style={{ padding: 5 }} elevation={4}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ marginTop: 25 }}
        >
          <div style={{ position: "relative" }}>
            <Avatar alt="eleve profile" className={classes.eleveAvatar} />
            <IconButton
              aria-label="edit photo eleve"
              style={{ position: "absolute", left: -20, bottom: 0 }}
            >
              <EditIcon fontSize="large" />
            </IconButton>
          </div>
        </Box>

        <div className={classes.section}>
          <Box display="flex" alignItems="center">
            <Avatar src={studentIcon} alt="student" />
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Information eleve
            </Typography>
          </Box>

          <Box display="flex">
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              value={creatEleveInput.eleve.sexe}
              onChange={(e) =>
                handleChangeCreatEleveForm("eleve", "sexe", e.target.value)
              }
            >
              <FormControlLabel value="g" control={<Radio />} label="Garçon" />
              <FormControlLabel value="f" control={<Radio />} label="Fille" />
            </RadioGroup>
          </Box>
          <Box display="flex" className={classes.marginBottom}>
            <TextField
              error={isEleveFormError("matricule")}
              onChange={(e) =>
                handleChangeCreatEleveForm("eleve", "matricule", e.target.value)
              }
              value={creatEleveInput.eleve.matricule}
              size="small"
              variant="outlined"
              placeholder="matricul *"
              fullWidth
            />
          </Box>

          <UtilisateurFields {...UTILISATEUR_FIELDS_PROPS} />

          <Box>
            <KeyboardDatePicker
              error={isEleveFormError("naissance")}
              size="small"
              fullWidth
              autoOk
              inputVariant="outlined"
              maxDate={Date.now()}
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Anniversaire"
              value={naissance()}
              onChange={(e) => {
                handleChangeCreatEleveForm(
                  "eleve",
                  "naissance",
                  dateToString(e as Date)
                );
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Box>
        </div>

        <Divider style={{ marginTop: 5, marginBottom: 5 }} />

        <div className={classes.section}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.marginBottom}
          >
            <Avatar src={parentIcon} alt="student" />
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Information parent
            </Typography>
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              error={isParentFormError("pere")}
              onChange={(e) =>
                handleChangeCreatEleveForm("parent", "pere", e.target.value)
              }
              value={creatEleveInput.parent.pere}
              size="small"
              variant="outlined"
              placeholder="pere *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              error={isParentFormError("mere")}
              onChange={(e) =>
                handleChangeCreatEleveForm("parent", "mere", e.target.value)
              }
              value={creatEleveInput.parent.mere}
              size="small"
              variant="outlined"
              placeholder="mere *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              onChange={(e) =>
                handleChangeCreatEleveForm("parent", "tuteur", e.target.value)
              }
              value={creatEleveInput.parent.tuteur}
              size="small"
              variant="outlined"
              placeholder="tuteur *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              error={isParentFormError("adresse")}
              onChange={(e) =>
                handleChangeCreatEleveForm("parent", "adresse", e.target.value)
              }
              value={creatEleveInput.parent.adresse}
              size="small"
              variant="outlined"
              placeholder="adresse *"
              fullWidth
              style={{ marginRight: 5 }}
            />
            <TextField
              onChange={(e) =>
                handleChangeCreatEleveForm("parent", "contact", e.target.value)
              }
              error={isParentFormError("contact")}
              value={creatEleveInput.parent.contact}
              size="small"
              variant="outlined"
              placeholder="contacte *"
              fullWidth
            />
          </Box>
        </div>

        <Box display="flex" justifyContent="flex-end">
          <Button
            disableFocusRipple={true}
            variant="contained"
            color="primary"
            size="small"
            className={classes.submitBtn}
            onClick={submitEleve}
          >
            Enregistrer
            {eleveLoading && (
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
