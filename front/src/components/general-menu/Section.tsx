import * as React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Typography, makeStyles, Box } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { SectionItem } from "./SectionMenu";
import SectionMenu from "./SectionMenu";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: "#919191",
    marginBottom: 25,
  },

  sectionContainer: {
    marginBottom: theme.spacing(4),
  },
}));

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
          <ScrollMenu
            data={section.sectionItems.map((sectionItem, i) => (
              <SectionMenu key={i} color={section.color} item={sectionItem} />
            ))}
            arrowLeft={<ArrowBackIosIcon />}
            arrowRight={<ArrowForwardIosIcon />}
            alignCenter={false}
            itemStyle={{ marginRight: 25 }}
            menuStyle={{ marginBottom: 25 }}
          />
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
        {
          name: "Liste des eleves",
        },
        {
          name: "Frais de scolarite",
        },
        {
          name: "Liste des eleves",
        },
        {
          name: "Frais de scolarite",
        },
        {
          name: "Liste des eleves",
        },
        {
          name: "Frais de scolarite",
        },
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
