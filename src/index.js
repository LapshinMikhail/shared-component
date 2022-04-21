import React from 'react';
import ReactDOM from 'react-dom/client';
import SharedComp from './SharedComp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SharedComp />);

export { default as SharedComp } from './SharedComp.js';