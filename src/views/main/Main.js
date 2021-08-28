import React from 'react';
import PropTypes from 'prop-types';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CustomButtom from '../../components/CustomButton';
import MainTextContainer from './MainTextContainer';
import translations from '../../translations';

const Main = ({ condominium }) => (
  <div className="main-container">
    <MainTextContainer condominium={condominium} />
    <CustomButtom
      variant="contained"
      size="large"
      text={translations.reserve}
      icon={<ScheduleIcon />}
    />
  </div>
);

Main.propTypes = {
  condominium: PropTypes.string.isRequired,
};

export default Main;
