import React from 'react';

import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    const benchesList = benches.map((bench, idx) => {
      return (
        <BenchIndexItem bench={bench} key={idx} />
      ) 
    });
    
    return (
      <ul>{benchesList}</ul>
    );
   };
};

export default BenchIndex;