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
      disabledBackground: '#c1c1c1 !important',
      disabled: '#f2f2f2 !important',
    },
  },
  overrides: {
    MuiTypography: {
      subtitle1: {
        fontSize: 14,
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
