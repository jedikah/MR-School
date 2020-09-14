import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';
import { Omit } from '@material-ui/types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

interface ListItemLinkProps {
  expandClick: () => void;
  length: number;
  open: boolean;
  primary: string;
  className?: any;
  to: string;
}

export const ListItemLink = (props: ListItemLinkProps) => {
  const { expandClick, length, open, primary, className, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem
        button
        className={className}
        onClick={expandClick}
        component={to !== '' ? renderLink : 'nav'}
      >
        <ListItemText primary={primary} />
        {length > 0 ? open ? <ExpandLess /> : <ExpandMore /> : ''}
      </ListItem>
    </li>
  );
};
