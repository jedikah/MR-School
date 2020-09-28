import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Responsable } from "../../../../../graphql/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "auto",
    },
    cardHeader: {
      padding: theme.spacing(1, 2),
    },
    list: {
      width: 200,
      height: 230,
      backgroundColor: theme.palette.background.paper,
      overflow: "auto",
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  })
);

function not(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: number[], b: number[]) {
  return [...a, ...not(b, a)];
}

function extractLeftRight(
  professeurs: Responsable[],
  affected: Responsable[]
): {
  left: number[];
  right: number[];
} {
  const affectedNumber: number[] = affected.map((a) =>
    parseInt(a.utilisateur.id)
  );
  const left: number[] = [];
  const right: number[] = [];

  professeurs.forEach((p) => {
    const pNumber = parseInt(p.utilisateur.id);
    if (affectedNumber.includes(pNumber)) right.push(pNumber);
    else left.push(pNumber);
  });

  return {
    left,
    right,
  };
}

export interface AffectProfesseurTransfer {
  professeurs: Responsable[];
  affected: Responsable[];
  checkedState: [number[], React.Dispatch<React.SetStateAction<number[]>>];
  leftState: [number[], React.Dispatch<React.SetStateAction<number[]>>];
  rightState: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}

const AffectProfesseurTransfer: React.FC<AffectProfesseurTransfer> = ({
  professeurs,
  affected,
  checkedState,
  leftState,
  rightState,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = checkedState;
  const [left, setLeft] = leftState;
  const [right, setRight] = rightState;

  React.useEffect(() => {
    const { left, right } = extractLeftRight(professeurs, affected);
    setLeft(left);
    setRight(right);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [professeurs, affected]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: number[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: number[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selectionne`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`;
          const professeur = professeurs.find(
            (p) => parseInt(p.utilisateur.id) === value
          );

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={
                  professeur &&
                  `${professeur.utilisateur.nom} ${professeur.utilisateur.prenom}`
                }
              />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList("Choix", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Choisis", right)}</Grid>
    </Grid>
  );
};

export default AffectProfesseurTransfer;
