import React, { useState, useRef } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

const UserMenu = () => {
  const [anchor, setAnchor] = useState(null);

  const userMenuRef = useRef(null);

  return (
    <>
      <IconButton ref={userMenuRef} onClick={() => setAnchor(userMenuRef.current)}>
        <AccountCircleIcon fontSize="large" style={{ fill: '#f2f2f2' }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        keepMounted
        open={!!anchor}
        onClose={() => setAnchor(null)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
