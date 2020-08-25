import * as React from "react";
import { Typography } from "@material-ui/core";

interface SectionItem {
  name: string;
}

interface Section {
  title: string;
  sectionItems: Array<SectionItem>;
}

interface SectionProps {
  sections?: Array<Section>;
}

const Section: React.FC<SectionProps> = ({ sections }) => {
  console.log(sections);
  return <div>Section</div>;
};

Section.defaultProps = {
  sections: [
    {
      title: "Gestion des eleves",
      sectionItems: [
        {
          name: "Liste des eleves",
        },
      ],
    },
  ],
} as Partial<SectionProps>;

export default Section;
