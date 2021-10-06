import React from 'react';

import BenchMap from '../bench_map';

const BenchShow = ({ bench }) => (
  <div>
    <BenchMap singleBench={bench} />
    <ul>
      <li>Description:{bench.description}</li>
      <li>Number of Seats:{bench.num_of_seats}</li>
      <li>Latitude:{bench.lat}</li>
      <li>Longitude:{bench.lng}</li>
    </ul>
  </div>
);

export default BenchShow;