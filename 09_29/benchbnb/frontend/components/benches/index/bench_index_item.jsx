import React from 'react';
import { Link } from 'react-router-dom';

const BenchIndexItem = ({ bench }) => (
  <Link to={`/benches/${bench.id}`}>{bench.description}</Link>
);

export default BenchIndexItem;