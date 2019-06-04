// import React from 'react';

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';

const HomePage = () => (
  <>
    <Part1 />
    <Part2 />
    <Part3 />
    <Part4 />
    <Part5 />
    <Part6 />
  </>
);

export default HomePage;

/* eslint-disable react/prefer-stateless-function */
// export default class HomePage extends React.PureComponent {
//   render() {
//     return (
//       <h1>
//         <FormattedMessage {...messages.header} />
//       </h1>
//     );
//   }
// }
