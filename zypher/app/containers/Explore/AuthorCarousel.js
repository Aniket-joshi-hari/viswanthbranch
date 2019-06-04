import React, { Component } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './ContentExplore.css';
import Author from "../Authors/Author";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 500,
        // width: '50%'
    },
    carouselHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

class AuthorCarousel extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { authors, classes } = this.props;
        return(
            <div>
            <div className={classes.carouselHeader}>
                <h2>Authors</h2>
                <Link to="/authors">
                    <Button color="primary"
                        className={classes.button}
                    >
                        View All
                    </Button>
                </Link>                
            </div>
            <CarouselProvider totalSlides={authors.length / 2} step={1}>
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
                {authors.map(tile => (
                <Slide
                    style={{ textAlign: 'center', height: '200px', width: '210px' }}
                >
                    <Author data={tile} isCarousel />
                </Slide>
                ))}
            </Slider>
            </CarouselProvider>
            </div>
        )
    }
}

export default withStyles(styles)(AuthorCarousel);
