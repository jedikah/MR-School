import * as React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: "#919191",
    marginBottom: 25,
  },

  sectionContainer: {
    marginBottom: theme.spacing(4),
  },

  sectionItem: {
    minWidth: "25%",
    minHeight: theme.spacing(35),
    marginLeft: theme.spacing(3),
    padding: theme.spacing(2),
  },

  sectionName: {
    color: "#fff",
    fontWeight: 900,
  },
}));

interface SectionItem {
  name: string;
}

interface Section {
  title: string;
  color: string;
  sectionItems: Array<SectionItem>;
}

interface SectionProps {
  sections?: Array<Section>;
}

const Section: React.FC<SectionProps> = ({ sections }) => {
  const classes = useStyles();
  return (
    <div>
      {sections!.map((section, i) => (
        <div key={i}>
          <Typography className={classes.title} variant="h4">
            {section.title}
          </Typography>
          <Box display="flex" className={classes.sectionContainer}>
            {section.sectionItems.map((sectionItem, i) => (
              <Box
                key={i}
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.sectionItem}
                style={{ backgroundColor: section.color }}
              >
                <Typography variant="h5" className={classes.sectionName}>
                  {sectionItem.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </div>
      ))}
    </div>
  );
};

Section.defaultProps = {
  sections: [
    {
      title: "Gestion des eleves",

      color: "#451515",
      sectionItems: [
        {
          name: "Liste des eleves",
        },
        {
          name: "Frais de scolarite",
        },
      ],
    },
    {
      title: "Gestion des responsables",
      color: "#770103",
      sectionItems: [
        {
          name: "Liste des responsables",
        },
      ],
    },
  ],
};

export default Section;
