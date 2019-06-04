import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
// icons
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  title: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

const DialogComponent = ({ classes, open, title, style: {dialogTitle} = {}, ...props }) => (
  <Dialog
    fullWidth
    maxWidth="sm"
    open={open}
    onClose={props.onClose}
    aria-labelledby={title}
  >
    <DialogTitle disableTypography className={classes.title} style={dialogTitle || {}}>
      <Typography variant="h6">{title}</Typography>
      <IconButton
        aria-label="Close"
        className={classes.closeButton}
        onClick={props.onClose}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    {props.render()}
  </Dialog>
);

DialogComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(DialogComponent);
