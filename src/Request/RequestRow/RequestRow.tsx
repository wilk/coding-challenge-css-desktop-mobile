import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import style from './RequestRow.style';

const useStyles = createUseStyles(style);

const Request: React.FC = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.requestRow}>
      {children}
    </div>
  );
};

export default Request;
