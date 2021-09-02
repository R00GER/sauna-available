import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AppBar, Tabs, Tab, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  tab: {
    fontSize: '.8rem',
  },
});

const LoginAndRegistrationFormTabs = ({ tabIndex, handleTabChange }) => {
  const { t } = useTranslation('Common');

  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{ background: 'unset', boxShadow: 'unset', marginBottom: '2rem' }}
    >
      <Tabs value={tabIndex} onChange={handleTabChange} centered indicatorColor="primary">
        <Tab
          className={classes.tab}
          label={
            <Typography variant="subtitle1" color="textPrimary">
              {t('Common:forms.signIn')}
            </Typography>
          }
          id="tab-0"
        />
        <Tab
          className={classes.tab}
          label={
            <Typography variant="subtitle1" color="textPrimary">
              {t('Common:forms.signUp')}
            </Typography>
          }
          id="tab-1"
        />
      </Tabs>
    </AppBar>
  );
};

LoginAndRegistrationFormTabs.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default LoginAndRegistrationFormTabs;
