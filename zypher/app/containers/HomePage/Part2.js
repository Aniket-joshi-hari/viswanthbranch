/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Typography from '../../components/Typography';
// images
import Img1 from '../../images/c1.png';
import Img2 from '../../images/c2.png';
import Img3 from '../../images/c3.png';
import Img4 from '../../images/c4.png';
import Img5 from '../../images/c5.png';
// icons
import elasticIcon from '../../icons/elastic.png';
import glossierIcon from '../../icons/glossier.png';
import DeloitteIcon from '../../icons/Deloitte.png';
import fullstoryIcon from '../../icons/fullstory.png';
import nubankIcon from '../../icons/nubank.png';
import condenastIcon from '../../icons/condenast.png';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    // marginBottom: theme.spacing.unit * 4,
    background:
      'url("https://clubhouse.io/e8981cf9f2b3539c8a0910b3b366e903.png")',
    backgroundPosition: '0 0',
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    bottom: '-90px',
    // clipPath: 'polygon(0 100%, 100% 80%, 100% 0, 0 20%)',
    content: '',
    left: 0,
    // position: 'absolute', // relative
    right: 0,
    top: '90px',
    width: '100%',
    zIndex: 0,
  },
  images: {
    // marginTop: theme.spacing.unit * 8,
    // display: 'flex',
    // flexWrap: 'wrap',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    gridGap: '40px',
  },
  imageContainer1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContainer2: {},
  imageContainer3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageWrapper: {
    position: 'relative', // 'absolute'
    display: 'block',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      // width: '100% !important',
      // height: 100,
    },
  },
  image1: {
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 225,
    },
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  image2: {
    height: 120,
    [theme.breakpoints.down('md')]: {
      height: 90,
    },
    [theme.breakpoints.down('sm')]: {
      height: 60,
    },
  },
  image3: {
    height: 600,
    [theme.breakpoints.down('md')]: {
      height: 450,
    },
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  image4: {
    height: 150,
    [theme.breakpoints.down('md')]: {
      height: 120,
    },
    [theme.breakpoints.down('sm')]: {
      height: 75,
    },
  },
  image5: {
    height: 250,
    [theme.breakpoints.down('md')]: {
      height: 185,
    },
    [theme.breakpoints.down('sm')]: {
      height: 125,
    },
  },
  imageSrc: {
    position: 'relative', // absolute
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    borderRadius: '8px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .15), 0 8px 8px 0 rgba(0, 0, 0, .05)',
    // backgroundPosition: 'center 40%',
  },
  subTitle: {
    fontSize: 18,
    margin: 30,
    marginTop: 40,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: 22,
    },
  },
  paper: {
    height: 500,
  },
  image: {
    height: 'auto',
    width: '55%',
    maxHeight: 33,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function ProductHero(props) {
  const { classes } = props;
  const images = [[Img1, Img2], [Img3], [Img4, Img5]];

  const icons = [
    elasticIcon,
    glossierIcon,
    DeloitteIcon,
    fullstoryIcon,
    nubankIcon,
    condenastIcon,
  ];

  return (
    <Paper className={classes.root} component="section" elevation={0}>
      <div className={classes.bgImage} />
      <div className={classes.images}>
        {images.map((arr, k) => (
          <div key={k} className={classes[`imageContainer${k + 1}`]}>
            {arr.map((url, i) => {
              let key = 1;
              if (k === 0 && i === 1) {
                key = 2;
              } else if (k === 1) {
                key = 3;
              } else if (k === 2) {
                key = i === 0 ? 4 : 5;
              }
              return (
                <div
                  key={i}
                  className={classes.imageWrapper}
                  style={{
                    paddingBottom: i === 0 && (k === 0 || k === 2) ? 40 : 0,
                  }}
                >
                  <div
                    className={classnames(
                      classes.imageSrc,
                      classes[`image${key}`],
                    )}
                    style={{ backgroundImage: `url(${url})` }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Paper className={classes.paper} component="section" elevation={0}>
        <Typography
          className={classes.subTitle}
          color="textSecondary"
          style={{ marginTop: 40 }}
        >
          Trusted by forward-thinking software teams around the world
        </Typography>
        <Grid container spacing={5}>
          {icons.map((url, i) => (
            <Grid key={i} item sm={4} md={2}>
              <div className={classes.item}>
                <img src={url} alt="company Icon" className={classes.image} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
