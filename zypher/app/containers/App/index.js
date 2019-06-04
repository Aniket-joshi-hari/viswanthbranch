/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Explore from 'containers/Explore';
import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Plans from 'components/Plans';
import Header from 'components/Header';
import Authors from 'containers/Authors';
import AuthorDetails from 'components/AuthorDetails';
import ProductDetails from 'components/ProductDetails';
import Profile from 'containers/Profile';

import MyBooks from 'containers/MyBooks';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Zypher" defaultTitle="Zypher">
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/plans" component={Plans} />
        <Route path="/explore" component={Explore} />
        <Route path="/authors" component={Authors} />
        <Route path="/author-details" component={AuthorDetails} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/my-books" component={MyBooks} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
