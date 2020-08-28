import * as React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionItem: {
    minWidth: theme.spacing(40),
    minHeight: theme.spacing(20),
    padding: theme.spacing(2),
  },

  sectionName: {
    color: "#fff",
    fontWeight: 900,
  },
}));

export interface SectionItem {
  name: string;
}

interface SectionMenuProps {
  color: string;
  item: SectionItem;
}

const SectionMenu: React.FC<SectionMenuProps> = ({ color, item }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea className={["hvr-grow"].join(" ")}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.sectionItem}
          style={{ backgroundColor: color }}
        >
          <Typography variant="h5" className={classes.sectionName}>
            {item.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SectionMenu;
