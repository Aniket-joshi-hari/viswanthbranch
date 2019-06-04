/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import classnames from 'classnames';
// icons
import bugsnag51Icon from 'icons/bugsnag51.png';
import img52Icon from 'icons/img52.png';
import cat53Icon from 'icons/cat53.png';
import slack54Icon from 'icons/slack54.png';
import gdrive55Icon from 'icons/gdrive55.png';
import img56Icon from 'icons/img56.png';
import img57Icon from 'icons/img57.png';
import img58Icon from 'icons/img58.png';
import bucket59Icon from 'icons/bucket59.png';
import img501Icon from 'icons/img501.png';
import svgIcons from '../../utils/svgIcons';
import NavLink from '../../components/NavLink';
import { Colors } from '../../utils/theme';
import Typography from '../../components/Typography';
// import zendesk502Icon from "icons/zendesk502.png";

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 8,
    // marginBottom: theme.spacing.unit * 4,
    padding: 70,
    [theme.breakpoints.down('md')]: {
      padding: 40,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 26,
    letterSpacing: '-.0125em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 19,
      marginBottom: 27,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 21,
      marginBottom: 30,
    },
  },
  description: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 36,
    letterSpacing: '-.0195em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
      marginBottom: 40,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 34,
      marginBottom: 50,
    },
  },
  fabBtn: {
    textTransform: 'capitalize',
    fontSize: 19,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  image: {
    height: 'auto',
    // width: '65%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '50%',
    },
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  smallIcon: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      paddingTop: 30,
    },
  },
  // item: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center'
  // },
  container: {
    paddingTop: 70,
  },
  dynamicImage: {
    borderRadius: '50%',
    // height: 426,
    // width: 426
  },
  iconWrapper: {
    // position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '50%',
    boxShadow:
      '0 0 10px 0 rgba(0, 0, 0, .05), 0 30px 30px 0 rgba(0, 0, 0, .05)',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: 180,
    margin: 10,
    [theme.breakpoints.down('md')]: {
      height: 140,
      margin: 8,
    },
    [theme.breakpoints.down('sm')]: {
      height: 100,
      margin: 5,
    },
    [theme.breakpoints.down('xs')]: {
      height: 80,
    },
  },
  zendeskIconWrapper: {
    // marginRight: '-10.85069%',
    // -webkitTransform: 'rotate(8deg)',
    //     marginRight: -10.85069 %;
  },
  zendeskIcon: {
    // -webkit - transform: translate(50 %);
    /* display: inline-block; */
    /* transform: translate(50%); */
  },
});

function ProductHero(props) {
  const { classes } = props;
  const icons = [
    bugsnag51Icon,
    img52Icon,
    cat53Icon,
    slack54Icon,
    gdrive55Icon,
    img56Icon,
    img57Icon,
    img58Icon,
    bucket59Icon,
    img501Icon,
    // zendesk502Icon
  ];
  //   const viewportSize = 'md';
  //   const size = viewportSize === 'md' || viewportSize === 'lg' ? '2x' : '1x';

  return (
    <Paper
      className={classes.root}
      color="primary"
      component="section"
      elevation={0}
    >
      <Grid container spacing={5} className={classes.container}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            component="h2"
            className={classes.title}
            gutterBottom
          >
            We play well with others
          </Typography>
          <Typography
            variant="p"
            component="p"
            className={classes.description}
            gutterBottom
          >
            Clubhouse integrates with your process and the most important tools
            you use every day – from code review to bug reporting, file sharing,
            and team communication.
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            <Fab
              className={classes.fabBtn}
              variant="extended"
              color="primary"
              aria-label="Connect your tools"
            >
              Connect your tools
            </Fab>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.smallIcon}>
          <p style={{ display: 'flex' }}>
            <span style={{ paddingRight: 20 }}>{svgIcons.i49}</span>
            <span>
              Our
              <NavLink
                color="primary"
                text="RESTAPI"
                style={{ color: Colors.primary }}
              />
              {`does the heavy lifting so you (and I) don't have to.`}
            </span>
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={5} className={classes.container}>
        {icons.map((url, i) => (
          <Grid
            key={i}
            item
            md={2}
            sm={2}
            xs={2}
            className={
              i === icons.length - 1
                ? classnames(classes.iconWrapper, classes.zendeskIconWrapper)
                : classes.iconWrapper
            }
          >
            <img src={url} alt={`img${i + 1}`} className={classes.image} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
