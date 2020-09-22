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

export interface MatiereFormProps {
  value: string;
  loading: boolean;
  title: string;
  submitBtnLabel: string;
  error: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const MatiereForm: React.FC<MatiereFormProps> = ({
  value,
  onChange,
  onSubmit,
  loading,
  title,
  submitBtnLabel,
  error,
}) => {
  const classes = useStyles();

  return (
    <Card elevation={4} className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="designation"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          error={error && value === ""}
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
      </CardContent>
    </Card>
  );
};

export default MatiereForm;
