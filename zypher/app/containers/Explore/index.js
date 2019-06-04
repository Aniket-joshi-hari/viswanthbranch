/**
 *
 * Explore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectAuthors, 
  makeSelectCategory, 
  makeSelectThemes, 
  makeSelectError, 
  makeSelectLoading
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadExploreData } from './actions';
import AuthorCarousel from './AuthorCarousel';
import CategoryContainer from './CategoryContainer';
import ThemeConatiner from './ThemeContainer';
import './index.css';


/* eslint-disable react/prefer-stateless-function */
export class Explore extends React.Component {
  componentDidMount() {
    this.props.handleClick();
  }

  render() {
    const { authors, category, themes } = this.props;
    return(
      <div className="explorePage">
        <AuthorCarousel authors={authors} />
        <CategoryContainer category={category} />
        <ThemeConatiner themes={themes} />
      </div>
    );   
  }
}

Explore.propTypes = {
  handleClick: PropTypes.func,
  loading: PropTypes.bool,
  authors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  category: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  themes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  authors: makeSelectAuthors(),
  category: makeSelectCategory(),
  themes: makeSelectThemes(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleClick: evt => dispatch(loadExploreData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'explore', reducer });
const withSaga = injectSaga({ key: 'explore', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Explore);
