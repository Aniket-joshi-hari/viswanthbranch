/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import Typography from '../../components/Typography';
import ImgC21 from '../../images/c21.png';
import ImgC22 from '../../images/c22.png';
import ImgC23 from '../../images/c23.png';
import ImgC024 from '../../images/c024.png';
import ImgC025 from '../../images/c025.png';
import ImgC026 from '../../images/c026.png';
import ImgC5 from '../../images/c5.png';
import ImgC1 from '../../images/c1.png';

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 8,
    paddingBottom: 200,
    paddingLeft: 70,
    paddingRight: 70,
  },
  title: {
    fontSize: 19,
    fontWeight: 500,
    margin: '0 0 1.81818em',
    letterSpacing: '-.0125em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 22,
    },
  },
  description: {
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: '-.0195em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 34,
    },
  },
  paper: {
    // height: 500,
  },
  container: {
    [theme.breakpoints.up('md')]: {
      maxHeight: 500,
      // overflowY: 'scroll',
      // '&::-webkit-scrollbar': {
      //     // width: 0
      // },
    },
  },
  item1: {
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      fontSize: 34,
      paddingRight: 20,
    },
  },
  item2: {
    [theme.breakpoints.up('md')]: {
      maxHeight: 500,
      overflowY: 'scroll',
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        width: 0,
      },
    },
  },
  listItemText: {
    fontWeight: '500px !important',
    fontSize: '14px !important',
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px !important',
    },
  },
  listItem: {
    '&:hover': {
      backgroundColor: `#fff`,
    },
    '&:focus': {
      backgroundColor: `#fff`,
    },
  },
  fabBtn: {
    textTransform: 'capitalize',
    // fontSize: '110%',
    fontSize: 19,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  scrollItem: {
    display: 'grid',
    gridTemplateRows: '6fr 1fr',
    gridRowGap: '50px',
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: 30,
      gridTemplateRows: '6fr 1fr',
    },
  },
  imageWrapper: {
    // display: 'inline-block',
    position: 'relative',
  },
  image: {
    position: 'absolute',
  },
  imageWrapper11: {
    left: '1.78571%',
    top: '7.14286%',
    zIndex: 1,
  },
  imageWrapper12: {
    left: '40.85714%',
    top: '24.7619%',
  },
  imageWrapper13: {
    left: '15.92857%',
    top: '40.57143%',
  },
  imageWrapper21: {
    left: '1.78571%',
    [theme.breakpoints.down('md')]: {
      left: '-8%',
    },
    top: '16.14286%',
  },
  imageWrapper22: {
    left: '55.85714%',
    top: '4.7619%',
    [theme.breakpoints.down('md')]: {
      left: '52.85714%',
    },
    zIndex: 1,
  },
  imageWrapper23: {
    left: '16.92857%',
    top: '62.57143%',
    [theme.breakpoints.down('md')]: {
      top: '50.57143%',
    },
  },
  imageWrapper31: {
    left: '1.78571%',
    [theme.breakpoints.down('md')]: {
      left: '-15.17857%',
    },
    top: '33.33%',
  },
  imageWrapper32: {
    left: '50.85714%',
    top: '4.7619%',
    zIndex: 1,
  },
  imageBoxShadow: {
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .15), 0 8px 8px 0 rgba(0, 0, 0, .05)',
    borderRadius: '8px',
  },
  ListItemTitle: {
    fontSize: 21,
    fontWeight: 600,
    letterSpacing: '-0.0125em',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  listItemDescription: {
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
});

const list = [
  {
    title: 'Build together',
    desc: `Quality software is made possible when developers can work and communicate
             quickly and efficiently across teams.`,
  },
  {
    title: 'Simplify from start to scale',
    desc: `Add more projects and teams with ease, and our simple platform will adapt\
             and scale with you as you grow.`,
  },
  {
    title: 'See the big picture',
    desc: `Track team progress and deliver on time – from project milestone to product launch.`,
  },
];
const imageList = [
  [ImgC21, ImgC22, ImgC23],
  [ImgC024, ImgC025, ImgC026],
  [ImgC5, ImgC1],
];


class ProductHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScrollItemIndex: 0,
    };

    this.scrollItem1 = React.createRef();
    this.scrollItem2 = React.createRef();
    this.scrollItem3 = React.createRef();
  }

  handleTabClick = index => () => {
    this.setState({ currentScrollItemIndex: index });
    this[`scrollItem${index + 1}`].current
      .scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  render() {
    const { classes } = this.props;
    const { currentScrollItemIndex } = this.state;
    return (
      <Paper className={classes.root} component="section" elevation={0}>
        <Grid container spacing={5} className={classes.container}>
          <Grid item xs={12} md={6}>
            <div className={classes.item1}>
              <Typography
                variant="h4"
                component="h2"
                className={classes.title}
                gutterBottom
              >
                Why Clubhouse
              </Typography>
              <Typography
                variant="p"
                component="p"
                className={classes.description}
                gutterBottom
              >
                A fast, lightweight and powerful approach to project planning
                and product creation.
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                <List component="nav">
                  {list.map(({ title }, i) => {
                    const opacity = currentScrollItemIndex === i ? 1 : 0.2;
                    return (
                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={this.handleTabClick(i)}
                      >
                        <ListItemText className={classes.listItemText}>
                          <span
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              paddingRight: 20,
                              color: '#00d38c',
                              opacity,
                            }}
                          >
                            0{i + 1}
                          </span>
                          <span
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              opacity,
                            }}
                          >
                            {title}
                          </span>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
                <Fab
                  className={classes.fabBtn}
                  variant="extended"
                  color="primary"
                  aria-label="Explore Features"
                >
                  Explore Features
                </Fab>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.item2}>
              {imageList.map((images, i) => (
                <div
                  key={i}
                  className={classes.scrollItem}
                  style={i < images.length - 1 ? { marginBottom: 200 } : {}}
                  ref={this[`scrollItem${i + 1}`]}
                >
                  <div className={classes.imagesContainer}>
                    {images.map((url, k) => (
                      <div
                        key={`pic${k}`}
                        className={classNames(
                          classes.imageWrapper,
                          classes[`imageWrapper${i + 1}${k + 1}`],
                        )}
                      >
                        <img
                          src={url}
                          alt="pic"
                          className={
                            i > 0
                              ? classNames(
                                classes.image,
                                classes.imageBoxShadow,
                              )
                              : classes.image
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className={classes.descContainer}>
                    <Typography
                      component="h4"
                      className={classes.ListItemTitle}
                      gutterBottom
                    >
                      {list[i].title}
                    </Typography>
                    <Typography
                      variant="p"
                      component="p"
                      color="textSecondary"
                      className={classes.listItemDescription}
                      gutterBottom
                    >
                      {list[i].desc}
                    </Typography>
                  </div>
                </div>
              ))}
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
