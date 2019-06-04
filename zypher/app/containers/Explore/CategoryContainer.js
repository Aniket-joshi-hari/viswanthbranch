import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import Paper from '@material-ui/core/Paper';
import './ContentExplore.css';
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


class CategoryContainer extends Component {
    render(){
        const { category, classes } = this.props;
        return(
            <div>
                <h2>Category</h2>
                <GridList className={classes.gridList} cols={6} spacing={40}>
                {category.map(tile => (
                    <Paper key={tile.categoryName} className="categoryContainer" elevation={1}>
                    <h4>{tile.displayName}</h4>
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
            </div>
        )
    }
}

export default withStyles(styles)(CategoryContainer);