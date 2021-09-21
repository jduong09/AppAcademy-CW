import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({ giphys }) => {
  const giphysList = giphys.map((giphy, idx) => (
    <GiphysIndexItem giphy={giphy} key={idx}/>
  ));

  return (
    <ul>{giphysList}</ul>
  );
};

export default GiphysIndex;
