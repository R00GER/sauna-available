import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CustomButtom from '../../components/CustomButton';
import translations from '../../translations';

const Main = () => (
  <>
    {/* <div className="main-container-bg" /> */}
    <div className="main-container">
      <div style={{ marginBottom: '1rem', zIndex: 1, textTransform: 'uppercase' }}>
        {translations.saunaAvailable}
      </div>
      <CustomButtom
        variant="contained"
        size="large"
        text={translations.reserve}
        icon={<ScheduleIcon />}
      />
    </div>
  </>
);

export default Main;
