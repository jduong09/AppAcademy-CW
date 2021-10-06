import React from 'react';

const FiltersForm = ({ minSeating, maxSeating, filter }) => {
  return (
    <section className="filters-form">
      <label>Minimum Seats:
        <input type="number" placeholder={minSeating} onChange={(e) => filter('minSeating', parseInt(e.target.value))} />
      </label>

      <label>Maximum Seats:
        <input type="number" placeholder={maxSeating} onChange={(e) => filter('maxSeating', parseInt(e.target.value))} />
      </label>
    </section>
  );
};

export default FiltersForm;