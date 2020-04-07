import Post from '@models/post';
import json from './assets/json';
import logo from './assets/png';
import './styles/styles.css';
// import './styleLess.less'
import './styles/stylesScss.scss';
import * as $ from 'jquery';
// import xml from './assets/data.xml';
// import csv from './assets/rdu-weather-history.csv'

const post = new Post('Wbpk post title', logo);

$('pre').html(post.toString());
// console.log('post', post.toString());
console.log('json', json);
// console.log('xml', xml);
// console.log('csv', csv)
