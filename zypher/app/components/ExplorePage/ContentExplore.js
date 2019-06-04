import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import './ContentExplore.css';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { getExploreDetails } from './ApiHandlers/Api';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  tile: {
    width: '100%',
    height: '100%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class ContentExplore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      category: [],
      themes: [],
    };
  }

  componentDidMount = async e => {
    const response = await getExploreDetails();
    if (response.success == true) {
      this.setState({
        authors: response.data.authors,
        category: response.data.category,
        themes: response.data.themes,
      });
    } else {
      console.log({ response });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>Authors</h2>
        <CarouselProvider totalSlides={this.state.authors.length / 2} step={1}>
          <div style={{ width: '100%' }}>
            <ButtonBack className="authorBackSlideButton">
              <IconButton aria-label="back">
                <KeyboardArrowLeftIcon />
              </IconButton>
            </ButtonBack>
            <ButtonNext className="authorNextSlideButton">
              <IconButton aria-label="next">
                <KeyboardArrowRightIcon />
              </IconButton>
            </ButtonNext>
          </div>
          <Slider style={{ height: '200px', width: '98%' }}>
            {this.state.authors.map(tile => (
              <Slide
                style={{ textAlign: 'center', height: '200px', width: '210px' }}
              >
                <Link
                  to={{
                    pathname: '/author-details',
                    state: { authorId: tile.authorId },
                  }}
                >
                  <div className="authorImageContainer">
                    <img src={tile.authorImageURL} alt={tile.authorName} />
                  </div>
                  <span>{tile.authorName}</span>
                </Link>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>

        <h2>Category</h2>
        <GridList className={classes.gridList} cols={6} spacing={40}>
          {this.state.category.map(tile => (
            <Paper className="categoryContainer" elevation={1}>
              <h4>{tile.categoryName}</h4>
              <div style={{ width: '210px', height: '175px' }}>
                <img
                  style={{ height: '100%', width: '100%' }}
                  src={tile.categoryImageURL}
                  alt={tile.categoryName}
                />
              </div>
            </Paper>
          ))}
        </GridList>
        <h2>Themes</h2>
        <GridList
          className={classes.gridList}
          cols={6}
          spacing={75}
          cellHeight={270}
        >
          {this.state.themes.map(tile => (
            <GridListTile key={tile.themeImageURL}>
              <img src={tile.themeImageURL} alt={tile.themeName} />
              <GridListTileBar
                title={tile.themeName}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ContentExplore);
