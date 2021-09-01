import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const MainTextContainer = ({ condominium }) => {
  const { t } = useTranslation('Common');

  return (
    <>
      <div style={{ zIndex: 1, fontSize: '2rem' }}>{condominium}</div>
      <div style={{ zIndex: 1, textTransform: 'uppercase' }}>{t('Common:main.saunaAvailable')}</div>
      <div style={{ zIndex: 1, fontSize: '1rem', marginBottom: '1rem' }}>
        Seuraava varattu vuoro: 28.8. kello 21:00 - 22.00
      </div>
    </>
  );
};

MainTextContainer.propTypes = {
  condominium: PropTypes.string.isRequired,
};

export default MainTextContainer;
