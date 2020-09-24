import * as React from "react";
import { InputBase, makeStyles, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface SearchMatiereProps {
  input: string;
  onChange: (value: string) => void;
}

const SearchMatiere: React.FC<SearchMatiereProps> = ({ input, onChange }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <SearchIcon />
      <InputBase
        value={input}
        placeholder="Recherche…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};

export default SearchMatiere;
