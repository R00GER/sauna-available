import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1FC58E',
    },
    secondary: {
      main: '#ffcc80',
    },
    text: {
      primary: '#F2F2F2',
      // secondary: '#e6e6e6',
      // secondary: '#e6e6e6',
      success: '#777C1C',
    },
    typography: {
      fontSize: [16, '!important'],
    },
    action: {
      disabledBackground: '#000000B3 !important',
      disabled: '#323232 !important',
    },
  },
  overrides: {
    MuiTypography: {
      subtitle1: {
        fontSize: '0.8rem',
      },
    },
    MuiInputBase: {
      root: {
        '& fieldset': {
          borderColor: '#f2f2f2',
        },
      },
    },
  },
});

export default theme;
