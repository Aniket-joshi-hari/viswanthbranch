import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './ContentExplore.css';


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


class ThemeContainer extends Component {
    render(){
        const { themes, classes } = this.props;
        return(
            <div>
            <h2>Themes</h2>
                <GridList
                className={classes.gridList}
                cols={6}
                spacing={75}
                cellHeight={270}
                >
                {themes.map(tile => (
                    <GridListTile key={tile.themeId}>
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
        )
    }
}

export default withStyles(styles)(ThemeContainer);