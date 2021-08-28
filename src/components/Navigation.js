import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  iconButton: {
    // color: 'rgb(233, 233, 233)',
    color: '#1FC58E',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Navigation = ({ user }) => {
  const classes = useStyles();

  return (
    <div className="navigation">
      <div className={classes.left}>
        {user && (
          <IconButton className={classes.iconButton}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography>SaunaAvailable</Typography>
      </div>
      <div className={classes.right} />
    </div>
  );
};

Navigation.propTypes = {
  user: PropTypes.bool.isRequired,
};

export default Navigation;
