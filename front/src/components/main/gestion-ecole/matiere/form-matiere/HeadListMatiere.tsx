import * as React from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import SearchMatiere from "./SearchMatiere";
import {
  MatiereState,
  MatiereDispatch,
} from "../../../../../graphql/matiere/matiere.context";

const useStyles = makeStyles((theme) => ({
  sortBtn: {
    position: "relative",
    left: 5,
    bottom: 9,
  },
}));

export interface HeadListMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
}

const HeadListMatiere: React.FC<HeadListMatiere> = ({
  matiereState,
  matiereDispatch,
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
      <Box display="flex">
        <Typography gutterBottom variant="h5" component="h2">
          Liste matiere
        </Typography>
        <IconButton
          className={classes.sortBtn}
          onClick={() => matiereDispatch({ type: "TOOGLE_SORT_MATIERES" })}
        >
          {matiereState.sortMatieres ? (
            <ArrowDownwardIcon />
          ) : (
            <ArrowUpwardIcon />
          )}
        </IconButton>
      </Box>
      <SearchMatiere
        input={matiereState.searchMatieres}
        onChange={(value) =>
          matiereDispatch({ type: "HANDLE_CHANGE_SEARCH_MATIERES", value })
        }
      />
    </Box>
  );
};

export default HeadListMatiere;
