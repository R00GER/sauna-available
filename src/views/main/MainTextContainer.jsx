import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

const MainTextContainer = ({ condominium }) => (
  <>
    <div style={{ zIndex: 1, fontSize: '2rem' }}>{condominium}</div>
    <div style={{ zIndex: 1, textTransform: 'uppercase' }}>{translations.saunaAvailable}</div>
    <div style={{ zIndex: 1, fontSize: '1rem', marginBottom: '1rem' }}>
      Seuraava varattu vuoro: 28.8. kello 21:00 - 22.00
    </div>
  </>
);

MainTextContainer.propTypes = {
  condominium: PropTypes.string.isRequired,
};

export default MainTextContainer;
