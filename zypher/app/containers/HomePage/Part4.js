/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import Typography from '../../components/Typography';
import { Colors } from '../../utils/theme';
// images
import DataikuParisTeam from '../../images/dataiku-paris-team-1080p.jpg';
import FullstoryCustomerStory from '../../images/fullstory-customer-story.jpg';
import GeckoboardCustomerStory from '../../images/geckoboard-customer-story-1.jpg';
import LaunchdarklyMember from '../../images/launchdarkly_member.jpg';
import MakespaceOffice from '../../images/makespace-office.jpg';
import SpliceCustomerStory from '../../images/splice-customer-story-2.jpg';
// icons
import dataikuIcon from '../../icons/dataiku2x.png';
import launchDarklyIcon from '../../icons/launchDarkly2x.png';
import makeSpaceIcon from '../../icons/makeSpace2x.png';
import fullStoryIcon from '../../icons/fullstory2x.png';
import geckoBoardIcon from '../../icons/geckoBoard2x.png';
import spliceIcon from '../../icons/splice2x.png';

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
    padding: 70,
    backgroundColor: Colors.primary,
    color: Colors.secondary,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 26,
    letterSpacing: '-.0125em',
    color: Colors.secondary,
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
  description2: {
    fontSize: 21,
    marginBottom: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
      marginBottom: 20,
    },
    lineHeight: `1.4`,
  },
  fabBtn: {
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  image: {
    height: 'auto',
    width: '65%',
    maxHeight: 33,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'opacity .5s ease-in-out',
    background: 'transparent',
    opacity: 0.3,
    cursor: 'pointer',
  },
  activeImageWrapper: {
    opacity: 1,
    cursor: 'default',
  },
  dynamicImageWrapper: {
    opacity: 1,
    cursor: 'default',
    maxWidth: '100%',
  },
  container: {
    paddingTop: 70,
  },
  container3: {
    paddingTop: 70,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  dynamicImage: {
    borderRadius: '50%',
    [theme.breakpoints.down('md')]: {
      paddingBottom: 40,
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      paddingBottom: 40,
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 20,
      maxWidth: '100%',
    },
    // height: 426,
    // width: 426
  },
  cite: {
    fontSize: 18,
    lineHeight: '1.375',
    paddingTop: 10,
    color: '#aa90d7', // '#8b78fa',
  },
});

const contentList = [
  {
    contentText: `A huge plus in Clubhouse’s favor is their pace of development.
              Milestones, reporting and numerous other improvements have all
              launched in the past few months. Their support team is also
              excellent!`,
    speaker: `Arnaud Pichery, VP of Engineering, Dataiku`,
    cite: `Dataiku: Helping companies transform raw data into business impact`,
  },
  {
    contentText: `Clubhouse provides the ability to work on a task list 
    at the smallest level where I can check things off, all the way
     up to tracking my entire company's engineering velocity at the
      milestone level.`,
    speaker: `John Kodumal, CTO/Co-Founder, LaunchDarkly`,
    cite: `LaunchDarkly: Releasing features with ease`,
  },
  {
    contentText: `Clubhouse allows us to provide structure and process. It keeps us organized and focused.`,
    speaker: `Yasmin Nozari, VP of Product, MakeSpace`,
    cite: `MakeSpace: Putting it in storage.`,
  },
  {
    contentText: `Clubhouse’s powerful API lets us set up the processes
     and flows that are right for our team. The interface doesn’t
      pigeonhole us into a specific methodology.`,
    speaker: `Jaclyn Spangler, Hugger in Product, fullstory`,
    cite: `FullStory: Seeing things from the user's point of view`,
  },
  {
    contentText: `A huge plus in Clubhouse’s favor is their pace of development.
     Milestones, reporting and numerous other improvements have all launched
      in the past few months. Their support team is also excellent!`,
    speaker: `Tom Randle, VP of Operations, Geckoboard`,
    cite: `Geckoboard: Keeping teams focused on the metrics that matter`,
  },
  {
    contentText: `Clubhouse is an internal visibility tool.
     From a product engineering standpoint, information is power.
     I want to make sure everyone has anything they need to do their job.`,
    speaker: `Juan Pablo Buriticá, VP of Engineering, Splice`,
    cite: `Splice: Enabling artists to act on inspiration`,
  },
];

const icons = [
  dataikuIcon,
  launchDarklyIcon,
  makeSpaceIcon,
  fullStoryIcon,
  geckoBoardIcon,
  spliceIcon,
];

const images = [
  DataikuParisTeam,
  FullstoryCustomerStory,
  GeckoboardCustomerStory,
  LaunchdarklyMember,
  MakespaceOffice,
  SpliceCustomerStory,
];


class ProductHero extends Component {
  state = {
    currentTabIndex: 0,
  };

  handleTabClick = index => () => {
    this.setState({ currentTabIndex: index });
  };

  render() {
    const { classes } = this.props;
    const { currentTabIndex } = this.state;
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
          <Grid item xs={0} md={4} />
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.title}
              gutterBottom
            >
              You’re in good company
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={classes.description}
              gutterBottom
            >
              Thousands of technology-driven organizations – from start-ups to
              large enterprises – enjoy using Clubhouse to develop software more
              efficiently.
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              <Fab
                className={classes.fabBtn}
                variant="extended"
                color="secondary"
                aria-label="Explore customer stories"
              >
                Explore customer stories
              </Fab>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.container}>
          {icons.map((url, i) => (
            <Grid key={i} item sm={4} md={2} onClick={this.handleTabClick(i)}>
              <div
                className={
                  currentTabIndex === i
                    ? classNames(
                      classes.imageWrapper,
                      classes.activeImageWrapper,
                    )
                    : classes.imageWrapper
                }
              >
                <img src={url} alt="company icon" className={classes.image} />
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.container3}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="p"
              component="p"
              className={classNames(classes.description, classes.description2)}
              gutterBottom
            >
              <q>{contentList[currentTabIndex].contentText}</q>
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              className={classes.title}
              gutterBottom
            >
              {contentList[currentTabIndex].speaker}
              <p className={classes.cite}>
                {contentList[currentTabIndex].cite}
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <div
              className={classNames(
                classes.imageWrapper,
                classes.dynamicImageWrapper,
              )}
            >
              <img
                src={images[currentTabIndex]}
                alt="pic"
                className={classes.dynamicImage}
              />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
