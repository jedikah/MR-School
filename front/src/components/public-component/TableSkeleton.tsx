import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface DataSkeletonThemeProps {
  count?: number;
  height?: number;
  width?: number;
  color?: string;
  highlightColor?: string;
}

interface TableRowSkeletonProps extends DataSkeletonThemeProps {
  column: number;
  actionWidth?: number;
}

const TableCellSkeletonTheme: React.FC<DataSkeletonThemeProps> = ({
  count,
  height,
  width,
  color,
  highlightColor
}) => {
  return (
    <TableCell align="center">
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton count={count} height={height} width={width} />
      </SkeletonTheme>
    </TableCell>
  );
};

export const TableRowSkeleton: React.FC<TableRowSkeletonProps> = ({
  count = 10,
  height,
  width,
  color,
  highlightColor,
  column,
  actionWidth
}) => {
  let array = [],
    i = 0;

  for (i = 0; i < column; i++) {
    array.push(i);
  }

  return (
    <TableRow>
      {array.map((val) => {
        if (val === 0)
          return (
            <TableCellSkeletonTheme
              key={val}
              count={count}
              height={height}
              width={100}
              color={color}
              highlightColor={highlightColor}
            />
          );
        else if (val !== array.length - 1)
          return (
            <TableCellSkeletonTheme
              key={val}
              count={count}
              height={height}
              width={width}
              color={color}
              highlightColor={highlightColor}
            />
          );
        else
          return (
            <TableCellSkeletonTheme
              key={val}
              count={count}
              height={height}
              width={actionWidth}
              color={color}
              highlightColor={highlightColor}
            />
          );
      })}
    </TableRow>
  );
};
