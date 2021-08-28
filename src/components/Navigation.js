import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  iconButton: {
    // color: 'rgb(233, 233, 233)',
    color: '#1FC58E',
  },
});

const Navigation = ({ user }) => {
  const classes = useStyles();

  return (
    <div className="navigation">
      {user && (
        <IconButton className={classes.iconButton}>
          <MenuIcon />
        </IconButton>
      )}
      <div>SaunaAvailable</div>
    </div>
  );
};

Navigation.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Navigation;
