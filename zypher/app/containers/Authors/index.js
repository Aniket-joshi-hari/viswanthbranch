import React, {Component} from "react";
import PropTypes from 'prop-types';

import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
    makeSelectAuthors,
    makeSelectError,
    makeSelectLoading
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadAuthorsData } from './actions';
import Author from "./Author";


const styles = theme => ({
    titleStyle: {
        marginBottom: 0,
        marginLeft: 10,
        padding: '20px 0px 0px 40px',
    },
    containerCardStyle: {
        marginLeft: 10,
        // paddingLeft: isMobile ? 0 : 48,
        padding: 30,
        paddingTop: 0,
        display: 'flex',
        flexWrap: 'wrap',
    },
    cardStyle: {
        width: 150,
        height: 250,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        position: 'relative',
    }
});


class Authors extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.props.getAuthors();
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <h1 className={classes.titleStyle}>All Authors</h1>
                <main id="hits" className={classes.containerCardStyle}>
                    {this.props.authors.map((author, idx) => (
                        <Card key={idx} className={classes.cardStyle}>
                            <Author data={author} />
                        </Card>
                    ))}
                </main>
            </div>
            // <Card
            //                 component={Link}
            //                 to={{
            //                     pathname: '/author-details',
            //                     state: { authorId: author._id },
            //                 }}
            //                 style={cardStyle}
            //                 raised={0}
            //             >
        );
    }
}

Authors.propTypes = {
    getAuthors: PropTypes.func,
    loading: PropTypes.bool,
    authors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
    authors: makeSelectAuthors(),
    error: makeSelectError(),
    loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
    return {
        getAuthors: () => dispatch(loadAuthorsData()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'authors', reducer });
const withSaga = injectSaga({ key: 'authors', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
    withStyles(styles)
)(Authors);
