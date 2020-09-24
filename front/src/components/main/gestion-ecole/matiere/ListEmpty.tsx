import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";

import emptyFolderIcon from "../../../../assets/001-empty-folder.png";

const useStyles = makeStyles((theme) => ({
  empytIcon: {
    width: 75,
    height: 75,
    marginTop: 25,
  },
}));

const ListEmpty: React.FC = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <img
        className={classes.empytIcon}
        src={emptyFolderIcon}
        alt="empty icon"
      />
    </Box>
  );
};

export default ListEmpty;
