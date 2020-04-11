import React from 'react';
import { render } from 'react-dom';
import Post from '@models/post';
import json from './assets/json';
import logo from './assets/png';
import './styles/styles.css';
// import './styleLess.less'
import './styles/stylesScss.scss';
// import * as $ from 'jquery';
import './babel';
import xml from './assets/data.xml';
import csv from './assets/rdu-weather-history.csv';

const App = () => {
  return (
    <div className="container">
      <h1>Webpack</h1>
      <hr />
      <div className="logo"></div>
      <hr />
      <pre></pre>
      <p>break</p>
      <div className="box">
        <h1>HEADING</h1>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));

// const post = new Post('Wbpk post title', logo);

// $('pre').html(post.toString());
// console.log('post', post.toString());
// console.log('json', json);
// console.log('xml', xml);
// console.log('csv', csv)
