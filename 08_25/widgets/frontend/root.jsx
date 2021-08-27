import React from 'react';
import Calculator from './calculator';
import Clock from './clock';
import Tabs from './tab';
import Weather from './weather';
import AutoComplete from './autocomplete';

const names =[
  'Steve Jobs',
  'Anna Barrett',
  'Barrel Changes',
  'Sadness Loneliness',
  'Justin Hawkins',
  'John Jones'
]

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'I am the second'},
  {title: 'three', content: 'I am the third'},
]

function Root() {
  return (
    <div>
      <h1>Hello</h1>
      <Calculator />
      <Clock/>
      <Weather />
      <Tabs panes={panes}/>
      <AutoComplete names={names}/>
    </div>
  );
};

export default Root;