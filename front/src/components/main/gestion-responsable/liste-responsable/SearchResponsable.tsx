import * as React from 'react';
import { InputBase, makeStyles } from '@material-ui/core';

import { UseEleves } from '../../../../graphql/eleve/eleves/eleves.service';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const SearchResponsables: React.FC<UseEleves> = ({
  elevesVariables,
  changeElevesFilterInput
}) => {
  const classes = useStyles();

  return (
    <InputBase
      value={elevesVariables.elevesFilterInput.matricule}
      placeholder="Recherche…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => changeElevesFilterInput('matricule', e.target.value)}
    />
  );
};

export default SearchResponsables;
