import React from 'react';
import ContentExplore from './ContentExplore';
import './index.css';

class Explore extends React.Component {
  render() {
    return (
      <div>
        <div className="explorePage">
          <ContentExplore />
        </div>
      </div>
    );
  }
}

export default Explore;
