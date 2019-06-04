/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

// import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  // Hits,
  // SearchBox,
  // Pagination,
  // ClearRefinements,
  // RefinementList,
  // connectRefinementList,
  // Highlight,
  //   Configure,
  connectSearchBox,
  connectHits,
} from 'react-instantsearch-dom';

import {
  // TextField,
  Card,
} from '@material-ui/core';

// const searchClient = algoliasearch(
//     'F51QBSJWD3',
//     '590ee8d93945c9c98168b50c84582719'
// );

const styles = theme => ({
  toolbar: {
    padding: '25px 20px',
  },
  flex: {
    flex: 1,
  },
  searchBtn: {
    marginRight: 40,
    alignSelf: 'center',
    background: '#f8f6f6',
    padding: '10px',
    borderRadius: '50%',
    height: '40px',
    '&:hover': {
      backgroundColor: fade('#d0d0d0', 0.75),
    },
  },
  searchIcon: {
    paddingLeft: 80,
  },
  inputRoot: {
    color: '#696E79',
    width: '100%',
  },
  input: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    // width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sortBy: {
    padding: 20,
    paddingLeft: 100,
    fontSize: 16,
  },
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

// function Hit(props) {
//     return (
//         <div>
//             <img style={{ maxWidth: 120, maxHeight: 120 }} src={props.hit.imageURL} align="left" alt={props.hit.authorName} />
//             <div className="hit-name">
//                 <Highlight attribute="authorName" hit={props.hit} />
//             </div>
//             <div className="hit-productName">
//                 <Highlight attribute="productName" hit={props.hit} />
//             </div>
//             <div className="hit-price">${props.hit.price}</div>
//         </div>
//     );
// }

// Hit.propTypes = {
//     hit: PropTypes.object.isRequired,
// };

const isMobile = window.innerWidth < 450;

const MySearchBox = ({ currentRefinement, refine, classes }) => (
  <InputBase
    placeholder="Search books, authurs…"
    classes={{
      root: classes.inputRoot,
      input: classes.input,
    }}
    value={currentRefinement}
    onChange={e => refine(e.currentTarget.value)}
  />
);

MySearchBox.propTypes = {
  currentRefinement: PropTypes.string,
  refine: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

function CustomHits({ hits }) {
  const cardStyle = isMobile
    ? {
      width: 150,
      height: 250,
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }
    : {
      width: 150,
      height: 250,
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    };

  CustomHits.propTypes = {
    hits: PropTypes.array.isRequired,
  }

  const containerCardStyle = {
    marginLeft: 10,
    // paddingLeft: isMobile ? 0 : 48,
    padding: 30,
    display: 'flex',
    flexWrap: 'wrap',
  };
  const imageHolderStyle = {
    textAlign: 'center',
  };
  // console.log('hits', hits);
  return (
    <div>
      <main id="hits" style={containerCardStyle}>
        {hits.map((hit, idx) => (
          <Card key={idx} style={cardStyle}
            component={Link}
            to={{
              pathname: '/product-details',
              state: { productId: hit.ObjectID },
            }}>
            <div style={imageHolderStyle}>
              <img
                src={hit.imageURL}
                style={{ maxWidth: 170, maxHeight: 250 }}
                alt="lls"
              />
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
}

CustomHits.prototypes = {
  hits: PropTypes.array.isRequired,
}

const ConnectedSearchBox = connectSearchBox(MySearchBox);

const ConnectedHits = connectHits(CustomHits);

const Content = props => {
  const { classes } = props;
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <div color="inherit" className={classes.searchIcon}>
          <SearchIcon />
        </div>
        {/* <InputBase
            placeholder="Search books, authurs…"
            classes={{
                root: classes.inputRoot,
                input: classes.input,
            }}
        /> */}
        <ConnectedSearchBox {...props} />
        <div className={classes.flex} />
        <IconButton
          color="inherit"
          onClick={props.handleClose}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {/* <Typography className={classes.sortBy} variant="p" component="p">
            Sort by
                    </Typography>
        <Divider /> */}
      <ConnectedHits />
      {/* <Configure hitsPerPage={9} /> */}
    </>
  );
};

class Search extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.searchBtn}>
          <SearchIcon onClick={this.handleClickOpen} />
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <InstantSearch
            appId="F51QBSJWD3"
            apiKey="590ee8d93945c9c98168b50c84582719"
            indexName="books"
          >
            {/* // <SearchBox />
                        <ConnectedSearchBox />
                       // <Hits hitComponent={Hit} />
                        <ConnectedHits />
                        <Configure hitsPerPage={9} /> */}
            <Content handleClose={this.handleClose} {...this.props} />
          </InstantSearch>
        </Dialog>
      </>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
