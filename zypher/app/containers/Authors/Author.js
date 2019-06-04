import React from "react";
import { withStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
 

const styles = theme => ({
    author: {
        height: 160,
        width: 160,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imageHolderStyle: {
        textAlign: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    image: {
        maxWidth: 170,
        maxHeight: 250
    }
});

const Author = ({ classes, data, isCarousel}) => {
    return(
        <Link
            to={{
                pathname: '/author-details',
                state: { authorId: data.authorId || data._id },
            }}
        >
            {isCarousel ? 
            (
                <>
                    <div className={classes.author}>
                        <img src={data.authorImageURL} alt={data.authorName} />
                    </div>
                    <span>{data.authorName}</span>
                </>
            ) :
            (
                <>
                    <div className={classes.imageHolderStyle}>
                        <img
                            src={data.authorImage}
                            className={classes.image}
                            alt={data.name}
                        />
                        <span>{data.name}</span>
                    </div>
                </>
            )}
        </Link>        
    );
}

export default withStyles(styles)(Author);
