import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  link: {
    margin: theme.spacing.unit,
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});

// This resolves to nothing and doesn't affect browser history
// eslint-disable-next-line no-script-url
const dudUrl = 'javascript:;';

const NavLink = ({ classes, url, text, style = {}, ...props }) => (
  <Link
    underline="none"
    style={style}
    href={url || dudUrl}
    className={classes.link}
  >
    {text || props.render()}
  </Link>
);

NavLink.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  render: PropTypes.func,
};

export default withStyles(styles)(NavLink);
