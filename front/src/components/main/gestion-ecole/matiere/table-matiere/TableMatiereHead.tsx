import * as React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableMatiereHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Classe</TableCell>
        <TableCell align="right">Coefficient</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableMatiereHead;
