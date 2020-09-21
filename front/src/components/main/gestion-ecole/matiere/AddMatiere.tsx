import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "50%",
  },

  btnCtn: {
    paddingTop: theme.spacing(1),
  },
}));

const AddMatiere: React.FC = () => {
  const classes = useStyles();

  return (
    <Card elevation={4} className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Ajouter une matiere
        </Typography>

        <TextField fullWidth variant="outlined" placeholder="designation" />

        <Box
          display="flex"
          justifyContent="flex-end"
          className={classes.btnCtn}
        >
          <Button variant="contained" color="primary">
            Enregistrer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddMatiere;
