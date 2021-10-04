import React from 'react';

import BenchIndexItem from './bench_index_item';

const BenchIndex = ({ benches }) => {
  const benchesList = benches.map((bench, idx) => {
    return (
      <BenchIndexItem bench={bench} key={idx} />
    ) 
  });
  
  return (
    <ul>{benchesList}</ul>
  );
};

export default BenchIndex;