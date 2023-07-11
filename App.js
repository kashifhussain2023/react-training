import React from 'react';
import ReactDom from 'react-dom';

const p2 = React.createElement('h2',{id:"paragraph2"},'Hi this H2 Tag');

const root = ReactDom.createRoot( document.getElementById('root') )
root.render(p2);