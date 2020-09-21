import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useCreateMatiere } from "../../../../graphql/matiere/create-matiere/createMatiere.service";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "50%",
  },

  btnCtn: {
    paddingTop: theme.spacing(1),
  },

  submitBtn: {
    borderRadius: "50px 50px 50px 50px",
  },

  circularProgress: {
    color: "#fff",
    marginLeft: 15,
  },
}));

const AddMatiere: React.FC = () => {
  const classes = useStyles();
  const {
    createMatiereState,
    createMatiereDispatch,
    submitCreateMatiere,
    loadingCreateMatiere,
  } = useCreateMatiere();

  return (
    <Card elevation={4} className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Ajouter une matiere
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="designation"
          value={createMatiereState.variables.designation}
          onChange={(e) =>
            createMatiereDispatch({
              type: "HANDLE_CHANGE",
              value: e.target.value,
            })
          }
        />

        <Box
          display="flex"
          justifyContent="flex-end"
          className={classes.btnCtn}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
            onClick={submitCreateMatiere}
          >
            Enregistrer
            {loadingCreateMatiere && (
              <CircularProgress
                size={20}
                className={classes.circularProgress}
              />
            )}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddMatiere;
