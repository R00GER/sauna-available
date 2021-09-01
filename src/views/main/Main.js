import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CustomButtom from '../../components/CustomButton';
import MainTextContainer from './MainTextContainer';

const Main = ({ condominium }) => {
  const { t } = useTranslation('Common');
  return (
    <div className="main-container">
      <MainTextContainer condominium={condominium} />
      <CustomButtom
        variant="contained"
        size="large"
        text={t('Common:main.reserve')}
        icon={<ScheduleIcon />}
      />
    </div>
  );
};

Main.propTypes = {
  condominium: PropTypes.string.isRequired,
};

export default Main;
