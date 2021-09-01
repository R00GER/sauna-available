import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const LoginAndRegistrationFormTabs = ({ tabIndex, handleTabChange }) => {
  const { t } = useTranslation('Common');

  return (
    <AppBar
      position="static"
      style={{ background: 'transparent', boxShadow: 'unset', marginBottom: '1rem' }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
      >
        <Tab label={t('Common:forms.signIn')} id="tab-0" />
        <Tab label={t('Common:forms.signUp')} id="tab-1" />
      </Tabs>
    </AppBar>
  );
};

LoginAndRegistrationFormTabs.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default LoginAndRegistrationFormTabs;
