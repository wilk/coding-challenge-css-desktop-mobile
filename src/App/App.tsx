import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Request from '../Request/Request';
import AirbaseLogo from './airbase.svg';
import Lock from './lock.svg';
import request from '../request.json';
import style from './App.style';

const useStyles = createUseStyles(style);

const App = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.logo}>
          <img src={AirbaseLogo} alt="airbase" />
        </div>

        {/* TODO: is this section dynamic? if so, where's the data? */}
        <div className={classes.securityMessageContainer}>
          <div className={classes.securityMessageTitle}><img src={Lock} alt="security message" /> Security Message</div>
          <div className={classes.securityMessageDescription}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</div>
        </div>

        <Request request={request} />
      </div>
    </div>
  );
}

export default App;
