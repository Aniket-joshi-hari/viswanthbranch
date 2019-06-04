import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { Colors } from '../../utils/theme';

const styles = theme => ({
  card: {
    minWidth: '100%',
    // height: '100%',
    // marginTop: 100,
    paddingTop: 100,
    paddingBottom: 100,
    overflow: 'inherit',
    position: 'relative',
    backgroundColor: Colors.primary,
    color: Colors.secondary,
  },
  content: {
    margin: '0 auto',
    // height: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      // maxWidth: 1212,
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
      paddingLeft: 70,
      paddingRight: 70,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      alignItems: 'flex-start',
      maxWidth: '100%',
      padding: '70px 18px 60px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      paddingLeft: 50,
      paddingRight: 50,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '78%',
      paddingLeft: 70,
      paddingRight: 70,
    },
  },
  title: {
    fontWeight: 400,
    fontSize: 66,
    color: Colors.secondary,
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
    },
    marginBottom: '0.50em',
  },
  subTitle: {
    fontSize: 18,
    color: Colors.secondary,
    marginBottom: '0.50em',
    [theme.breakpoints.up('md')]: {
      fontSize: 22,
    },
  },
  fabBtn: {
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 500,
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    minWidth: 250,
    margin: '10px 15px',
  },
  cardAction: {
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '90%',
    },
  },
});

const Header = ({ classes }) => (
  <Card className={classes.card} elevation={0}>
    <CardContent className={classes.content}>
      <Typography
        variant="h2"
        component="h1"
        className={classes.title}
        gutterBottom
      >
        Build what’s next
      </Typography>
      <Typography className={classes.subTitle}>
        Experience the most lightweight, enjoyable way for your team to work.
      </Typography>
      <CardActions className={classes.cardAction}>
        <Fab
          className={classes.fabBtn}
          variant="extended"
          aria-label="Try it for Free"
        >
          Try it for Free
        </Fab>
        <Fab
          className={classes.fabBtn}
          style={{ backgroundColor: '#fff' }}
          variant="extended"
          aria-label="Sign Up with Google"
        >
          Sign Up with Google
        </Fab>
      </CardActions>
      <Typography variant="p" component="p" style={{ marginTop: 40 }}>
        14 day trial. No credit card required.
      </Typography>
    </CardContent>
  </Card>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
