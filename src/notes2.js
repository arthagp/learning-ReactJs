import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

/* 
  {
    type: 'h1',
    props: {
      children : 'Biodata Perusahaan',
    },
  }

  Maka Dari itu jika kita console heading props nya berbentuk Object 
*/

const heading = React.createElement(
  'h1',
  {
    id: 'heading',
    className: 'heading-text'
  },
  'Biodata Perusahaan'
);
const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
const container = React.createElement('div', null, [heading, unorderedList]);
// console.log(heading);
const root = createRoot(document.getElementById('root'));
root.render(container);
