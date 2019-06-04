import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const theme = createMuiTheme({
  spacing: {
    unit: 8,
  },
  palette: {
    primary: blue,
    secondary: {
      main: '#FFF',
    },
    background: {
      paper: '#FFF',
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`,
  },
});

export default theme;

export const Colors = {
  primary: '#6515dd',
  secondary: '#fff',
};
