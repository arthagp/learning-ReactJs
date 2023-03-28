import React from 'react';
import ReactDOM from 'react-dom';

const objectList = {
  nama: 'Dicoding Indonesia',
  bidang: 'Education',
  tagline: 'Decode Ideas, Discover Potential'
};

const heading = React.createElement('h1', null, 'Biodata Perusahaan');
const list = React.createElement(
  'ul',
  null,
  <li>Nama : {objectList.nama}</li>,
  <li>Bidang : {objectList.bidang}</li>,
  <li>Tagline :{objectList.tagline}</li>
);
const containerList = React.createElement('div', { className: 'container' }, [heading, list]);

ReactDOM.render(containerList, document.getElementById('root'));
