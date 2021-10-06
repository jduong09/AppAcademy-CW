import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './index/bench_index';
import FiltersForm from '../filters/filters_form';

const Search = ({ fetchBenches, benches, filter, minSeating, maxSeating }) => (
  <div>
    <BenchMap benches={benches} filter={filter}/>
    <BenchIndex fetchBenches={fetchBenches} benches={benches} />
    <FiltersForm minSeating={minSeating} maxSeating={maxSeating} filter={filter} />
  </div>
);

export default Search;