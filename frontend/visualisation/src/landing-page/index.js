import React from 'react';

import Welcome from './Welcome';
import Header from './Header';
import ScrollBlock from './ScrollBlock';
import DirectedGraph from './DirectedGraph';

const LandingPage = () => (
  <div>
    <Welcome />
    <Header />
    <ScrollBlock />
    <DirectedGraph />
  </div>
);

export default LandingPage;
